import styled from "styled-components";

const InputContainer = styled('div')`
    width:100%;
    display: flex;
    gap:16px;
`

const InputStyled = styled('input')`
  width:100%;
  padding: 0 1rem;
  border-radius:6px;
  border: 1px solid gray;
  outline:none;
  &:focus{
    outline: none;
    border
  }
`

const BtnStyled = styled('button')`
    width:fit-content;
    display: flex;
    white-space:nowrap;
    padding: .5rem .8rem;
    background-color: var(--blue);
    color: white;
    border:none;
    border-radius:6px;
`

export { InputContainer, InputStyled, BtnStyled }