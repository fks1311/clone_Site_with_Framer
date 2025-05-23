import { forwardRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { styled } from "styled-components";

const DefaultImgViewContainer = forwardRef((props, ref) => {
  const { topY, Img } = ref;
  const { scrollY, scrollYProgress } = useScroll();
  const [y, setY] = useState();
  const top = useTransform(scrollYProgress, [0, 0.5], [topY, 0]);
  const x = useTransform(scrollYProgress, [0.5, 1], [0, 1270]);

  // y Scroll 값 감지
  useMotionValueEvent(scrollY, "change", (latest) => {
    setY(latest);
  });

  return (
    <Container img={Img} style={{ top, x: y >= 1000 && x }}>
      {props.children}
    </Container>
  );
});

const Container = styled(motion.div)`
  position: relative;
  flex: 1 1 auto;
  height: ${window.innerHeight}px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default DefaultImgViewContainer;
