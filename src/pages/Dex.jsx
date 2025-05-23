import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PoketmonList from "../components/PoketmonList";
import MOCK_DATA from "../data/mock";

// 전체 페이지 래퍼
const PageWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
`;

// 포켓몬 리스트를 위한 별도 박스
const ListSection = styled.section`
  background-color: white;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  
`;

const Dex = () => {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  return (
    <PageWrapper>
      <Dashboard selected={selected} onRemove={handleRemove} />

      <ListSection>
        <PoketmonList poketmons={MOCK_DATA} onAddPoketmon={handleAdd} />
      </ListSection>
    </PageWrapper>
  );
};

export default Dex;
