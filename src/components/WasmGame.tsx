import { useRef, useEffect } from "react";
import styles from "./WasmGame.module.css";

interface WasmGameProps {
  wasmPath: string; //  wasmのパス
  gameId: string; // ゲーム識別子
  width: number; // ゲーム画面本来の幅(px)
  height: number; // ゲーム画面本来の高さ(px)
}

export function WasmGame({ wasmPath, gameId, width, height }: WasmGameProps) {
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
    <div
      className={styles.wrapper}
      style={{
        maxWidth: `${width}px`,
        maxHeight: `min(${height}px, calc(100dvh - 200px))`,
        aspectRatio: `${width} / ${height}`,
      }}
    >
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
