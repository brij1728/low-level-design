import { About, Accordion, Comments, Header, ImageSlider, Language, LiveChat, Login, Pagination, SearchUI } from '../components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'

import { Home } from '../pages'
import { LANG } from '../utils'
import { LANGKeyType } from '../types/langType'
import { ProtectedRoute } from './ProtectedRoute'

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
          <Route path="/comments" element={<Comments />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="live-chat" element={<LiveChat/>} />
          <Route path="search-ui" element={<SearchUI/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
