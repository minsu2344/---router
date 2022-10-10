import React from 'react'
import { Navigate } from 'react-router-dom';

function MyPage() {
  const isLoggedIn = false;

  return (
    <div>
      {/* 로그인 여부 확인 후 Navigate로 login페이지 이동 */}
      {/* replace: true로 기록 남기지 않음 */}
      {isLoggedIn ?
        '마이페이지' :
        <Navigate to='/login' replace={true} />
      }
    </div>
  )
}

export default MyPage