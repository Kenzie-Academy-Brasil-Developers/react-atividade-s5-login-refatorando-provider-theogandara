import styled from "styled-components";

export const Form = styled.form`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 90vw;
max-width: 330px;
height: 60vw;
max-height: 200px;
background-color: #FDBF00;
border-radius: 8px;
margin-bottom: 100px;

`

export const TelaLogin = styled.div`
  background-color: #222222;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
export const Errors = styled.span`
font: 600;
font-size: 10px;
color: #222;
`