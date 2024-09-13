import {About, Login, ProtectedRoute, Team} from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en'); // Manage selected language state

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  return (
    <div>
      <header className="flex text-2xl font-bold py-5 bg-gray-700 text-blue-500 text-center justify-between">
        <nav className="flex p-2 m-2 w-96 text-lg justify-between">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/team">Team</a>
          <a href="/login">Login</a>
        </nav>
        <select value={lang} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
