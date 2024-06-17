import { motion } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Container className="nav">
      <NavContainer>
        <Title onClick={() => navigate("/")}>with Framer-motion</Title>
        <Item>
          <Items onClick={() => navigate("/scroll-overlay")}>
            Scroll-Overlay
          </Items>
        </Item>
      </NavContainer>
      <Outlet />
    </Container>
  );
}

const Container = styled.div``;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #f7f9f2;
  font-size: 20px;
  font-weight: 500;
`;
const Title = styled(motion.div)`
  padding: 1rem;
`;

const Item = styled.div`
  padding: 1rem;
`;
const Items = styled(motion.div)``;
