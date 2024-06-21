import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";

export default function SkewHome() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <ViewContainer style={{ opacity }}>Skewing Site with Scroll</ViewContainer>
  );
}

const ViewContainer = styled(motion.div)`
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #31363f;
  font-size: 48px;
  font-weight: bold;
`;
