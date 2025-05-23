import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 1rem;
  margin: 0.5rem;
  width: 150px;
  height: 250px;
  text-align: center;
  background-color: white;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const ActionButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #6e0202;
  }
`;

const PoketmonCard = ({ pokemon, onClick, buttonLabel = "추가" }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${pokemon.id}`);
  };

  return (
    <Card>
      <div onClick={handleCardClick}>
        <Image src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>{pokemon.korean_name}</p>
        <p>ID: {pokemon.id}</p>
      </div>
      <ActionButton onClick={onClick}>{buttonLabel}</ActionButton>
    </Card>
  );
};

export default PoketmonCard;
