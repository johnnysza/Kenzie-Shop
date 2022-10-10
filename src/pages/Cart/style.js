import styled from "styled-components";

export const PageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: #5a90c2;
    height: 30px;
    width: 30px;
  }
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

export const ShowBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 460px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Resumo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  min-width: 200px;
  height: 200px;
  border-radius: 8px;
  background: #f3eae8;
  border: 2px solid black;
  padding: 10px;

  @media (min-width: 460px) {
    margin-right: 20px;
  }
`;
