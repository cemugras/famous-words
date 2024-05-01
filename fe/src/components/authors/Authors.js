import React from 'react'
import AppContext from '../context/AppContext'
import { useContext } from 'react'

const Authors = () => {
  const { nameList } = useContext(AppContext);
  console.log(nameList)
  return (
    <div>Authors</div>
  )
}

export default Authors