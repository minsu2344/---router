import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import About from './pages/About'
import Article from './pages/Article'
import Articles from './pages/Articles'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles/:username' element={<Profile />} />
      </Route>

      <Route path='articles' element={<Articles/>}>
        <Route path=':id' element={<Article />} />
      </Route>
      {/* '*'는 wildcard 문자 */}
      {/* 상단에 위치한 모든 라우트들과 매칭되지 않으면 아래 라우트 실행 */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App