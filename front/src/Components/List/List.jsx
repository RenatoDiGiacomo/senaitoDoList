import React from 'react'
import ListItem from './ListItem'
import { ListStyled } from './ListStyled'
import { DataContext } from '../../Hooks/DataProvider';

const List = () => {
  const { data, setData } = React.useContext(DataContext);

  return (
    <ListStyled>
      {data && data.map((data, index) => (
        <ListItem key={index} index={index} data={data} setData={setData} />
      ))}
    </ListStyled>
  )
}

export default List