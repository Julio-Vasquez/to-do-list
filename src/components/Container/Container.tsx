import { useState } from 'react'

import { FormTask } from '../FormTask'
import { ListTask } from '../ListTask'

import { Item } from './type'

export const Container = () => {
  const [list, setList] = useState<Item[]>([])
  const [error, setError] = useState<string>('')

  const handleAddTask = (item: Item) => {
    const exists = list.some(e => e.task === item.task)
    if (!exists) {
      setList([...list, item])
      setError('')
    } else setError('El elemento ya existe en la lista')
  }

  return (
    <>
      <FormTask handleAddTask={handleAddTask} />
      <ListTask list={list} />
      {!!error && error}
    </>
  )
}
