import React from 'react';
import { InputContainer, InputStyled, BtnStyled } from './InputStyled';
import { DataContext } from '../../Hooks/DataProvider';

const Input = () => {
  const { data, setData } = React.useContext(DataContext);
  const [inputData, setInputData] = React.useState('');

  const handleAdd = () => {
    if (data && inputData !== "" && inputData !== " ") {
      var countid = 1
      setData([...data, { id: data.length + 1, name: inputData, status: false }]);
      setInputData('');
    } else {
      alert("Precisa escrever algo")
    }
  }

  return (
    <InputContainer>
      <InputStyled required={true} type="text" id="search" placeholder='Escreva o que deseja fazer...' value={inputData} onChange={({ target }) => setInputData(target.value)} />
      <BtnStyled onClick={handleAdd}>Cadastrar tarefa</BtnStyled>
    </InputContainer>
  )
}

export default Input