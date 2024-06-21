import { Fragment } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";

export default function ZoomHome() {
  const img = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    "",
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [6, 1]);

  return (
    <ViewContainer>
      <Container className="zoom-home" style={{ scale }}>
        {img.map((data, idx) => (
          <Fragment key={idx}>
            {idx === 7 ? (
              <Card>
                Zoom In - Out Scroll Animation
                <strong>scroll ↓</strong>
              </Card>
            ) : (
              <ImgCard center={idx} img={data} />
            )}
          </Fragment>
        ))}
      </Container>
    </ViewContainer>
  );
}

const ViewContainer = styled.div`
  height: 400vh;
`;

const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 475px repeat(2, 1fr);
`;

const ImgCard = styled.div`
  height: ${window.innerHeight / 3}px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: #80c4e9;
  strong {
    position: absolute;
    bottom: 5rem;
    color: #ff7f3e;
  }
`;
/**
 * ViewContainer : scrollY 위한 높이
 * Container : { position:fixed; width: 100%; } 설정해야 중앙을 기준으로 zoom out
 */
