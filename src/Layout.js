import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Layout() {
  // useNavigate는 Link 사용 없이 페이지 이동
  const navigate = useNavigate();

  // 이전 페이지로 이동
  function goBack() {
    navigate(-1); // n은 앞으로 n 이동. -n은 뒤로 n이동
  }

  // articles 이동
  function goArticles() {
    // ''에 페이지 경로 적는 것도 가능
    // replace: true를 하면 현재페이지 기록이 남지 않음
    // 따라서 뒤로가기를 하면 -2만큼 이동
    // replace는 option. 기본값 false
    navigate('/articles', {replace: true});
  }
  return (
    <div>
      <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout