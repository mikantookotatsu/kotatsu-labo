import { useEffect, useState } from "react";

// Go WASM用の型定義
interface GoInstance {
  importObject: WebAssembly.Imports; // wasmに渡すインポートオブジェクト
  run(instance: WebAssembly.Instance): Promise<void>; // WASM実行メソッド
}

// window オブジェクトの拡張
declare global {
  // memo declareはグローバルスコープ宣言
  interface Window {
    Go?: new () => GoInstance;
  }
}

// フックの入出力
interface UseWasmOptions {
  wasmPath: string;
}
interface UseWasmReturn {
  isLoading: boolean; // ロード中
  error: string | null; // エラーメッセージ
}

export function useWasm({ wasmPath }: UseWasmOptions): UseWasmReturn {
  // 状態変数,変更されるとコンポーネントが再レンダリングされる
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // コンポーネントのマウント・アンマウント時に実行される
  useEffect(() => {
    let mounted: boolean = true;

    // WASM読み込み関数
    const loadWasm = async () => {
      // 1. window.Go の存在確認
      if (!window.Go) {
        throw new Error("wasm_exec.js が読み込まれていません");
      }

      // 2. Goインスタンス作成
      const go = new window.Go();

      try {
        let result: WebAssembly.WebAssemblyInstantiatedSource;

        // 3. WASMファイルの読み込み
        if (WebAssembly.instantiateStreaming) {
          result = await WebAssembly.instantiateStreaming(
            fetch(wasmPath), // wasmファイル
            go.importObject // Go用のインポートオブジェクト
          );
        } else {
          const response = await fetch(wasmPath);
          const bytes = await response.arrayBuffer();
          result = await WebAssembly.instantiate(bytes, go.importObject);
        }

        if (!mounted) return;

        // 4. WASM実行
        go.run(result.instance).catch((runErr) => {
          if (mounted) {
            if (runErr.message !== "exit code 0") {
              setError(`異常でゲームが終了しました:${runErr.message}`);
            }
          }
        });

        setIsLoading(false);
      } catch (err) {
        if (!mounted) return; // コンポーネントがアンマウントされていたら無視
        console.error("WASM読み込みエラー:", err);
        setError(
          err instanceof Error ? err.message : "WASMの読み込みに失敗しました"
        );
        setIsLoading(false);
      }
    };

    loadWasm(); // WASM読み込み開始

    // クリーンアップ
    return () => {
      mounted = false;
      console.log("clean up");
    };
  }, [wasmPath]); // 変更時に再実行する対象

  return { isLoading, error };
}
