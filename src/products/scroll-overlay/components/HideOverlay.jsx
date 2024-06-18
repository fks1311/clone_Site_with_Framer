import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";

export default function HideOverlay() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [1700, 2000]);

  return <Container style={{ y }}>Welcome to the show!</Container>;
}

const Container = styled(motion.div)`
  position: absolute;
  display: flex;
  margin-left: 3rem;
  font-size: 55px;
  color: #f6fab9;
`;
