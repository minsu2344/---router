import React from 'react'
import { useSearchParams } from 'react-router-dom'

function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  function onToggleDetail() {
    setSearchParams({mode, detail: detail === 'true' ? false : true});
  }

  function onIncreaseMode() {
    setSearchParams({mode: mode === null ? 1 : parseInt(mode) + 1, detail});
  }

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle Detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  )
}

export default About