// components/PoketmonList.jsx
import React from "react";
import PoketmonCard from "./PoketmonCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 3.5rem;
  justify-content: start;
`;

const PoketmonList = ({ poketmons = [], onAddPoketmon }) => {
  return (
    <Container>
      {poketmons.map((pokemon) => (
        <PoketmonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onAddPoketmon(pokemon)}
          style={{ flex: "0 0 calc(100% / 6 - 1rem)" }} // 한 줄에 6개씩 배치
        />
      ))}
    </Container>
  );
};

export default PoketmonList;
