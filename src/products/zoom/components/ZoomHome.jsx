import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";

export default function ZoomHome() {
  const arr = Array.from(Array(15), (_, index) => index);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [6, 1]);

  return (
    <ViewContainer>
      <Container className="zoom-home" style={{ scale }}>
        {arr.map((data, idx) => (
          <Card key={idx} center={idx}>
            {data}
          </Card>
        ))}
      </Container>
    </ViewContainer>
  );
}

const ViewContainer = styled.div`
  height: 300vh;
`;
const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
const Card = styled.div`
  height: ${window.innerHeight / 3}px;
  border: 1px solid black;
  background-color: ${({ center }) => center === 7 && `#E0A75E`};
`;

/**
 * ViewContainer : scrollY 위한 높이
 * Container : { position:fixed; width: 100%; } 설정해야 중앙을 기준으로 zoom out
 */
