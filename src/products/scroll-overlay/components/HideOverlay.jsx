import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";

export default function HideOverlay() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [1700, 2000]);

  return <Container style={{ y }}>Hide Overlay</Container>;
}

const Container = styled(motion.div)`
  position: absolute;
  display: flex;
  font-size: 48px;
  color: #f6fab9;
`;
