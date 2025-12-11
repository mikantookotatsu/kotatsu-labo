import { useRef, useEffect } from "react";
import styles from "./WasmGame.module.css";

interface WasmGameProps {
  wasmPath: string; //  wasmのパス
  gameId: string; // ゲーム識別子
}

export function WasmGame({ wasmPath, gameId }: WasmGameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // iframeロード後にフォーカスを設定（キーボード入力のため）
    const handleLoad = () => {
      iframe.contentWindow?.focus();
    };

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
    };
  }, []);

  // game-loader.htmlにwasmファイル名をクエリパラメータで渡す
  // 例: /game-loader.html?wasm=game1.wasm
  const loaderUrl = `/game-loader.html?wasm=${encodeURIComponent(wasmPath)}`;

  return (
    <div className={styles.wrapper}>
      <iframe
        ref={iframeRef}
        src={loaderUrl}
        className={styles.iframe}
        title={`Game: ${gameId}`}
        tabIndex={0}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
