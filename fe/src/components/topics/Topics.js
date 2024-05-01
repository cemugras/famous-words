import React from 'react'
import { useContext } from 'react';
import AppContext from '../context/AppContext'


const Topics = () => {

  const { allDataList } = useContext(AppContext);
  return (
    <div>Topics</div>
  )
}

export default Topics