import { About, Accordion, Header, Language, Login, ProtectedRoute } from '../components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'

import { Home } from '../pages'
import { LANG } from '../utils'
import { LANGKeyType } from '../types/langType'

export const AppRoute = () => {
	 const [lang, setLang] = useState<LANGKeyType>('en'); 

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as LANGKeyType); 
  };
  return (
	<BrowserRouter>
      <div>
        <Header lang={lang} handleLanguageChange={handleLanguageChange}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/language" element={<Language lang={lang}  langData={LANG}/>} /> 
          <Route path="/accordion" element={<Accordion />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
