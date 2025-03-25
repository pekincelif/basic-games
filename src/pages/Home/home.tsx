// src/pages/Home.tsx
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #61dafb;
  font-size: 1.2rem;
`;

function Home() {
  return (
    <>
    <ParticlesBg type="random" bg={true}/>
    <Container>
      <Title></Title>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
      </nav>
    </Container>
    </>

  );
}

export default Home;