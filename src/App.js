import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import About from './pages/About'
import Article from './pages/Article'
import Articles from './pages/Articles'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <Routes>
      {/* Layout을 element만 이용해서 넣기 */}
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles/:username' element={<Profile />} />
      </Route>
      {/* 아래처럼 사용도 가능 */}
      <Route path='/' element={<Layout />}>
        {/* index는 상위 path와 동일한 path값 가짐 */}
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profiles/:username' element={<Profile />} />
      </Route>

      <Route path='articles' element={<Articles/>}>
        <Route path=':id' element={<Article />} />
      </Route>
    </Routes>
  )
}

export default App