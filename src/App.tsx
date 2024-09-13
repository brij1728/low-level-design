import { About, Login, ProtectedRoute, Team } from './components';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Home } from './pages';
import { LANGKeyType } from './types/langType';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState<LANGKeyType>('en'); 

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as LANGKeyType); 
  };

  return (
    <BrowserRouter> 
      <div className=''>
        <header className="flex text-2xl font-bold py-5 bg-gray-700 text-blue-500 text-center justify-between">
          <nav className="flex p-2 m-2 w-96 text-lg justify-between">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/team">Team</Link>
            <Link to="/login">Login</Link>
          </nav>
          <select value={lang} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
            <option value="ru">Russian</option>
          </select>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<Team lang={lang} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
