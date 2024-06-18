import { forwardRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";

const DefaultImgViewContainer = forwardRef((props, ref) => {
  const { bgColor, topY } = ref;
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 1], [topY, 0]);

  return (
    <Container $bgColor={bgColor} style={{ top }}>
      {props.children}
    </Container>
  );
});

const Container = styled(motion.div)`
  position: relative;
  flex: 1 1 auto;
  height: ${window.innerHeight}px;
  background-color: ${({ $bgColor }) => $bgColor};
`;

export default DefaultImgViewContainer;
