import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";
import SkewInnerMain from "./SkewInnerMain";

export default function SkewMain() {
  const { scrollYProgress } = useScroll();
  const skew = useTransform(scrollYProgress, [0, 1], ["-30deg", "0deg"]);
  const x = useTransform(scrollYProgress, [0, 1], ["45deg", "0deg"]);

  const LineTop = {
    width: true,
    top: "10",
    lineColor: "#eeeeee",
  };
  const LineRight = {
    height: true,
    top: "5",
    right: "20",
    lineColor: "#eeeeee",
  };
  const LineBottom = {
    width: true,
    bottom: "10",
    lineColor: "#eeeeee",
  };
  const LineLeft = {
    height: true,
    top: "5",
    right: "100",
    lineColor: "#eeeeee",
  };

  return (
    <ViewContainer style={{ skew }}>
      <LineContainer $linePosition={LineTop} />
      <LineContainer $linePosition={LineRight} />
      <LineContainer $linePosition={LineBottom} />
      <LineContainer $linePosition={LineLeft} />
      <SkewInnerMain />
    </ViewContainer>
  );
}

const ViewContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  height: ${window.innerHeight}px;
`;

const LineContainer = styled.div`
  position: absolute;
  top: ${({ $linePosition }) => $linePosition.top}rem;
  right: ${({ $linePosition }) => $linePosition.right}rem;
  bottom: ${({ $linePosition }) => $linePosition.bottom}rem;
  width: ${({ $linePosition }) => $linePosition.width && "80%"};
  height: ${({ $linePosition }) => $linePosition.height && "80%"};
  border: ${({ $linePosition }) =>
    $linePosition.width && `1px solid ${$linePosition.lineColor}`};
  border-right: ${({ $linePosition }) =>
    $linePosition.height && `2px solid ${$linePosition.lineColor}`};
`;
