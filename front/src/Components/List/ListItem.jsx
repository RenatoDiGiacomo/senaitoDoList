import React from 'react'
import {
  ListItemStyled,
  ListItemDataStyled,
  ListItemDataCheckStyled,
  ListItemDataTextStyled,
  ListItemIconStyled
} from './ListStyled';
import { ReactComponent as Trash } from '../../assets/trash.svg'

const ListItem = ({ data, index, setData }) => {
  const handleChange = (e) => {
    setData((prevData) => {
      const newData = [...prevData]; // Cria uma cópia do array de dados
      const dataIndex = newData.findIndex(item => item.id === data.id); // Encontra o índice do item no array
      if (dataIndex !== -1) {
        // Se o item existir no array, atualiza apenas o status do item específico
        newData[dataIndex] = { ...newData[dataIndex], status: !newData[dataIndex].status };
      }

      return newData; // Retorna o novo array com a atualização do status do item específico
    });
  }

  const handleDelete = (e) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    })
    alert("Deletado com sucesso");
  }

  return (
    <ListItemStyled>
      <ListItemDataStyled>
        <ListItemDataCheckStyled onChange={handleChange} type="checkbox" name="" id="" checked={data.status} />
        <ListItemDataTextStyled styled={data.status}>{data.name}</ListItemDataTextStyled>
      </ListItemDataStyled>
      <ListItemIconStyled styled={data.status} onClick={handleDelete}>
        <Trash />
      </ListItemIconStyled>

    </ListItemStyled>
  )
}

export default ListItem