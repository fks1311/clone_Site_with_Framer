import { forwardRef } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import useSequenceScroll from "../hook/useSequenceScroll";

const DefaultImgViewContainer = forwardRef((props, ref) => {
  const { bgColor, top } = ref;
  const animate = useSequenceScroll();

  return (
    <Container $bgColor={bgColor} top={top} {...animate}>
      {props.children}
    </Container>
  );
});

const Container = styled(motion.div)`
  position: relative;
  top: ${({ top }) => top}px;
  flex: 1 1 auto;
  height: ${window.innerHeight}px;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export default DefaultImgViewContainer;
