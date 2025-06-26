import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPage } from './components/auth/AuthPage';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
