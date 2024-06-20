import { styled } from "styled-components";
import Loading from "./components/Loading";
import MubasicMain from "./components/MubasicMain";

export default function Mubasic() {
  return (
    <PageContainer>
      {/* <Loading /> */}
      <MubasicMain />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  overflow: hidden;
`;
