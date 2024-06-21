import { styled } from "styled-components";
import SkewHome from "./components/SkewHome";
import SkewMain from "./components/SkewMain";
import SkewSkill from "./components/SkewSkill";

export default function SkewScroll() {
  return (
    <PageContainer>
      <SkewHome />
      <SkewMain />
      <SkewSkill />
    </PageContainer>
  );
}

const PageContainer = styled.div``;
