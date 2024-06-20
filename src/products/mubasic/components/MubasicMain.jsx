import { motion } from "framer-motion";
import { styled } from "styled-components";
import MubasicRightBar from "./MubasicRightBar";
import MubasicLeftContent from "./MubasicLeftContent";

export default function MubasicMain() {
  const arr = [
    {
      text: "M",
      property: { bgColor: "#A7E6FF", width: "80", top: "10", z: "0" },
    },
    {
      text: "U",
      property: { bgColor: "#1a2130", width: "60", top: "14", z: "1" },
    },
    {
      text: "B",
      property: { bgColor: "#FFC96F", width: "80", top: "18", z: "0" },
    },
    {
      text: "A",
      property: { bgColor: "#F8F4E1", width: "80", top: "26", z: "0" },
    },
    {
      text: "S",
      property: { bgColor: "#FF7F3E", width: "80", top: "34", z: "0" },
    },
    {
      text: "I",
      property: { bgColor: "#1a2130", width: "60", top: "38", z: "1" },
    },
    {
      text: "C",
      property: { bgColor: "#FED9ED", width: "80", top: "42", z: "0" },
    },
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
      <LeftView>
        <MubasicLeftContent />
      </LeftView>
      <RightView className="right" variants={rightVariants}>
        {arr.map((data, idx) => (
          <MubasicRightBar key={idx} ref={data.property}>
            {data.text}
          </MubasicRightBar>
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
  background-color: #ffc96f;
`;
const RightView = styled(motion.div)`
  position: relative;
  width: 50%;
  height: ${window.innerHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  background-color: #1a2130;
`;
