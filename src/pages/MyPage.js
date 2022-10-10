import React from 'react'
import { Navigate } from 'react-router-dom';

function MyPage() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ?
        '마이페이지' :
        <Navigate to='/login' replace={true} />
      }
    </div>
  )
}

export default MyPage