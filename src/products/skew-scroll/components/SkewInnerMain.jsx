import { motion } from "framer-motion";
import { styled } from "styled-components";

import Beach from "../assets/beach.jpg";

export default function SkewInnerMain() {
  return (
    <ViewContainer>
      <Top>Wow! Skew Inner Main Top</Top>
      <Content>
        <img src={Beach} alt="바다" />
        <div>Skew Transform animation</div>
      </Content>
    </ViewContainer>
  );
}

const ViewContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${window.innerHeight}px;
  width: 100%;
  perspective-origin: 500% 200%;
`;

const Top = styled.div`
  position: absolute;
  top: 7rem;
  left: 20rem;
  font-size: 38px;
  font-weight: bold;
`;
const Content = styled.div`
  img {
    position: absolute;
    height: 20rem;
    top: 11rem;
    left: 20rem;
  }
`;
