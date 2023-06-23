import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  height: 320px;
  border: 1px solid #D6D6D6;
  border-radius: 8px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 200px;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: 'Raleway', sans-serif;
    margin-top: 15px;
    h2{
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    p{
      font-size: 14px;
      font-weight: 700;
    }
  }
`

export const Cart = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #FF9671;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6px;
  cursor: pointer;
  svg{
    font-size: 25px;
    color: #FF9671;
  }
`