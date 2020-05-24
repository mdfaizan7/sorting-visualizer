import styled from "styled-components";

export const StyledBar = styled.div`
  width: 3px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  margin: 0px 1px;
`;
