import React from "react";
import styled from "styled-components";
import PoketmonCard from "./PoketmonCard";

const Container = styled.div`
  margin: 2rem;
  padding: 1rem;
  background-color: white;
  border: 2px solid black;
  border-radius: 12px;
`;

const Title = styled.h2`
  text-align: center;
  color: red;
  margin-bottom: 1rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const EmptyBox = styled.div`
  width: 150px;
  height: 190px; /* 카드 높이 맞춤 */
  border: 2px dashed black;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: 1rem;
`;

const Dashboard = ({ selected = [], onRemove }) => {
  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <CardsWrapper>
        {[...Array(6)].map((_, i) => {
          if (selected[i]) {
            return (
              <PoketmonCard
                key={selected[i].id}
                pokemon={selected[i]}
                onClick={() => onRemove(selected[i].id)}
                buttonLabel="삭제"
              />
            );
          } else {
            return <EmptyBox key={`empty-${i}`}>포켓몬 선택</EmptyBox>;
          }
        })}
      </CardsWrapper>
    </Container>
  );
};

export default Dashboard;
