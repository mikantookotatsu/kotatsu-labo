import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';

/**
 * メインアプリケーションコンポーネント
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ルーティングを追加するならここに */}
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;