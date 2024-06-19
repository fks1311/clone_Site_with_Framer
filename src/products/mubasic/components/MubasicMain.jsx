import { motion } from "framer-motion";
import { styled } from "styled-components";
import MubasicBar from "./MubasicBar";

export default function MubasicMain() {
  const arr = [
    { text: "M", property: {} },
    { text: "U", property: {} },
    { text: "B", property: {} },
    { text: "A", property: {} },
    { text: "S", property: {} },
    { text: "I", property: {} },
    { text: "C", property: {} },
  ];
  const variants = {
    start: { opacity: 0, y: "50%" },
    end: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.5 },
    },
  };
  const rightVariants = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <ViewContainer variants={variants} initial="start" animate="end">
      <LeftView>left</LeftView>
      <RightView className="right" variants={rightVariants}>
        {arr.map((data, idx) => (
          <MubasicBar key={idx} ref={data.property}>
            {data.text}
          </MubasicBar>
        ))}
      </RightView>
    </ViewContainer>
  );
}

const ViewContainer = styled(motion.div)`
  display: flex;
`;

const LeftView = styled.div`
  width: 50%;
  height: ${window.innerHeight}px;
  background-color: #ff7f3e;
`;
const RightView = styled(motion.div)`
  width: 50%;
  height: ${window.innerHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  background-color: #1a2130;
`;
