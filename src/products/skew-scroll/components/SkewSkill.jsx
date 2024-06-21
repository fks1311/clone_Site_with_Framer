import UseSkill from "global/UseSkill";
import { styled } from "styled-components";

export default function SkewSkill() {
  return (
    <UseSkill>
      <LeftInfo>
        <Container>
          <Subject>Product</Subject>
          <Content>Mubasic</Content>
        </Container>
        <Container>
          <Subject>producer</Subject>
          <Content>KIMRANYOUNG</Content>
        </Container>
        <Container>
          <Subject>css</Subject>
          <Content>framer-motion</Content>
        </Container>
      </LeftInfo>
      <RightInfo>
        <Container>
          <Subject>Purpose</Subject>
          <Content>Y 스크롤 이벤트 실행 시, 기울임 애니메이션을 적용</Content>
        </Container>
        <Container>
          <Subject>Addition</Subject>
          <Content>
            `transform-style: preserve-3d;` 속성을 이용하여 3D 효과 적용
          </Content>
        </Container>
      </RightInfo>
    </UseSkill>
  );
}

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const Container = styled.div``;
const Subject = styled.div`
  font-size: 34px;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 5px solid black;
`;
const Content = styled.div`
  font-size: 24px;
  margin-top: 1rem;
`;
