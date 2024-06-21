import { styled } from "styled-components";
import Loading from "./components/Loading";
import MubasicMain from "./components/MubasicMain";
import MubasicSkill from "./components/MubasicSkill";

export default function Mubasic() {
  return (
    <PageContainer>
      {/* <Loading /> */}
      <MubasicMain />
      <MubasicSkill />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  overflow: hidden;
`;
