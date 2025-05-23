import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/mock";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:white;
`;

const PoketName=styled.h2`
color: red;
`

const PoketType=styled.p`
color:black;
`
const Discrip=styled.p`
color:black;
`

const PreBtn=styled.button`
color:white;
background-color:black;
`

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));

  if (!pokemon) return <p>포켓몬을 찾을 수 없습니다.</p>;

  return (
    <Container>
      <img src={pokemon.img_url} alt={pokemon.korean_name} width="200" />
      <PoketName>{pokemon.korean_name}</PoketName>
      <PoketType>타입: {pokemon.types.join(", ")}</PoketType>
      <Discrip>{pokemon.description}</Discrip>
      <PreBtn onClick={() => navigate(-1)} color>뒤로 가기</PreBtn>
    </Container>
  );
};

export default Detail;
