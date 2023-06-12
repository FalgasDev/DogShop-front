import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #FFFAF4;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 725px) {
    padding-top: 40px;
    margin: auto;
    height: auto;
  }
  @media (max-width: 900px) {
    width: 70%;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
  input {
    background-color: #FFF;
    width: 430px;
    height: 65px;
    border: 1px solid #FF9671;
    border-radius: 6px;
    font-family: 'Oswald', sans-serif;
    font-size: 27px;
    font-weight: 700;
    padding-left: 17px;
    padding-bottom: 6px;
    outline: none;
    &::placeholder {
      color: #9F9F9F;
    }
  }
  button {
    width: 430px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF9671;
    border: none;
    border-radius: 6px;
    color: #FFF;
    font-family: 'Oswald', sans-serif;
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 6px;
    cursor: pointer;
  }
  p {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    color: #FF9671;
    margin-top: 22px;
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 475px) {
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-top: 0;
    input {
      width: 100%;
      height: 56px;
    }
    button {
      width: 100%;
      height: 56px;
    }
    p {
      font-size: 17px;
    }
  }
`