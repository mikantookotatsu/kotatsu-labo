import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // パスエイリアス設定
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },

  // 開発サーバー設定
  server: {
    port: 5173,  // default port
    open: true,  // 起動時にブラウザを自動で開く設定
  },

  // ビルド設定
  build: {
    outDir: 'dist',   // 出力ディレクトリ
    sourcemap: false, // ソースマップの生成を無効化
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
});
