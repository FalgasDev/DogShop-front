import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #B85B2D;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  svg{
    font-size: 25px;
    cursor: pointer;
    :nth-child(3){
      font-size: 30px;
    }
  }

  div{
    display: flex;
    align-items: center;
    gap: 10px;
    h1{
      font-size: 30px;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
    }
  }
`