import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color:white;
`;

const LogoImg=styled.img`
width:600px;
height:auto;`;

const StartButton=styled.button`
width:200px;
height:70px;
background-color:red;
color:white;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
      <Container>
        <LogoImg
        src="https://pokemonkorea.co.kr/img/logo.png"
        alt="포켓몬 로고"
      />
      <StartButton onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartButton>
      </Container>
  );
};

export default Home;
