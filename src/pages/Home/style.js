import styled from "styled-components";

export const PageCard = styled.div`
  /* background: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  background: linear-gradient(
    270deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(21, 135, 158, 1) 87%
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin: 5px;
  border-radius: 8px;
`;
