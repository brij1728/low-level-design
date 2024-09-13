import { LANGKeyType } from '../../types/langType';
import { Link } from 'react-router-dom'
import React from 'react'

interface IProps {
  lang: LANGKeyType;
  handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Header: React.FC<IProps> = ({lang, handleLanguageChange}) => {
	
  return (
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
  )
}
