import React from 'react';
import imgnune from './nunee.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="NuneeLover"></header>
      <img src={imgnune} style={{ width: 900 }}  resizeMode="contain"/>
      <p style={{ fontSize: 50}} >น่าร๊ากก</p>
      <p style={{ fontSize: 50}}>สู้ๆ อย่ายอมแพ้ ยิ้มๆไว้ เธอไม่ได้อยู่คนเดียวหรอกครับ</p>
    </div>
  );
}

export default App;
