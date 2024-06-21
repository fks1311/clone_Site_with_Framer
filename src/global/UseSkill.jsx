import { forwardRef } from "react";
import { styled } from "styled-components";

const UseSkill = forwardRef((props, ref) => {
  return <ViewContainer></ViewContainer>;
});

const ViewContainer = styled.div`
  display: flex;
  height: ${window.innerHeight / 3}px;
  background-color: #eeeeee;
`;

export default UseSkill;
