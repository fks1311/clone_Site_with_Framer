import { forwardRef } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

const MubasicBar = forwardRef((props, ref) => {
  const { bgColor } = ref;
  const variants = {
    start: { opacity: 0, x: "50%" },
    end: {
      opacity: 1,
      x: "0%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <BarContainer variants={variants} $bgColor={bgColor}>
      <TextBox>{props.children}</TextBox>
    </BarContainer>
  );
});

const BarContainer = styled(motion.div)`
  width: 80%;
  padding: 2.5rem;
  border-radius: 10px 0px 0px 10px;
  background-color: ${({ $bgColor }) => $bgColor};
`;
const TextBox = styled.div``;

export default MubasicBar;
