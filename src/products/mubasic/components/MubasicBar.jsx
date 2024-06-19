import { motion } from "framer-motion";
import { styled } from "styled-components";

const { forwardRef } = require("react");

const MubasicBar = forwardRef((props, ref) => {
  const variants = {
    start: { opaciy: 0 },
    end: { opaciy: 1 },
  };

  return (
    <BarContainer variants={variants}>
      <TextBox>{props.children}</TextBox>
    </BarContainer>
  );
});

const BarContainer = styled(motion.div)`
  width: 80%;
  padding: 2.5rem;
  border-radius: 10px 0px 0px 10px;
  background-color: #91ddcf;
`;
const TextBox = styled.div``;

export default MubasicBar;
