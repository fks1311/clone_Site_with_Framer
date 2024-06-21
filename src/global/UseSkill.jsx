import { forwardRef } from "react";
import { styled } from "styled-components";

const UseSkill = forwardRef((props, ref) => {
  return <ViewContainer>{props.children}</ViewContainer>;
});

const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  height: ${window.innerHeight / 1.5}px;
  background-color: #eeeeee;
`;

export default UseSkill;
