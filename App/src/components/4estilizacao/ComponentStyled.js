import { styled } from "styled-components";

export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.p`
  font-size: 50px;
  color: coral;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export const Button = styled.button`
  border: none;
  color: cyan;
  background-color: black;
  border-radius: 8px;
  padding: 2px;
  &:hover {
    color: black;
    background-color: cyan;
  }
`;

export const Block = styled.div`
  width: 200px;
  height: 400px;
  border-radius: 8px;
  background-color: aliceblue;
  text-align: center;
  color: black;
`;
