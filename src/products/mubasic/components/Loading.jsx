import { motion } from "framer-motion";
import { styled } from "styled-components";

export default function Loading() {
  return (
    <ViewContainer className="loading">
      <ChanedColorContainer />
      <LoadingContainer>Loading...</LoadingContainer>
    </ViewContainer>
  );
}

const ViewContainer = styled.div`
  display: flex;
`;

const ChanedColorContainer = styled(motion.div)`
  width: 50%;
  height: ${window.innerHeight}px;
  background-color: #9b86bd;
`;
const LoadingContainer = styled(motion.div)`
  width: 50%;
  height: ${window.innerHeight}px;
  background-color: #95d2b3;
`;
