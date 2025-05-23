import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";      // Home.jsx import
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 초기 진입 시 Home 보여줌 */}
        <Route path="/" element={<Home />} />

        {/* 버튼 눌렀을 때 Dex 페이지로 이동 */}
        <Route path="/dex" element={<Dex />} />

        {/* 포켓몬 상세 정보 */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
