import { motion, useScroll } from "framer-motion";
import { styled } from "styled-components";

import ScrollOverlayMain from "./components/ScrollOveralyMain";
import Img1 from "./components/Img1";
import Img2 from "./components/Img2";
import Img3 from "./components/Img3";

export default function ScrollOverlay() {
  return (
    <PageContainer className="scroll-overlay">
      <ScrollOverlayMain>Scroll Overlay</ScrollOverlayMain>
      <ScrollWrapper>
        <PositionWrapper>
          <Img1 />
          <Img2 />
          <Img3 />
        </PositionWrapper>
      </ScrollWrapper>
    </PageContainer>
  );
}

const PageContainer = styled.div``;

// Wrapper Container for `sticky` position
const ScrollWrapper = styled.div`
  height: 200vh;
`;

// position Container Wrapper
const PositionWrapper = styled(motion.div)`
  display: flex;
  position: sticky;
  top: 0;
`;
