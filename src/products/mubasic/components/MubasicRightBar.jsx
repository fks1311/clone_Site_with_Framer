import { forwardRef } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

const MubasicRightBar = forwardRef((props, ref) => {
  const { bgColor, width, top, z } = ref;
  const variants = {
    start: { opacity: 0, x: "50%" },
    end: {
      opacity: 1,
      x: "0%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <BarContainer
      variants={variants}
      $bgColor={bgColor}
      width={width}
      top={top}
      z={z}
    >
      <TextBox $bgColor={bgColor}>{props.children}</TextBox>
    </BarContainer>
  );
});

const BarContainer = styled(motion.div)`
  position: absolute;
  top: ${({ top }) => top}rem;
  width: ${({ width }) => width}%;
  padding: 2rem;
  z-index: ${({ z }) => z};
  border-radius: 10px 0px 0px 10px;
  background-color: ${({ $bgColor }) => $bgColor};
`;
const TextBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1.2;
  color: white;
  border-radius: 10px;
  background-color: hsla(30, 0%, 100%, 0.23);
`;

export default MubasicRightBar;
