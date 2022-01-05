import { MouseEvent, ChangeEvent } from 'react'
import { listTaskProps, listTaskPropsTypes } from './type'

import { Checkbox } from './../Checkbox'

export const ListTask = ({ list, setList }: listTaskProps) => {
  const onClickRemoveTask = (e: MouseEvent<HTMLButtonElement>) => {
    const newListTask = list?.filter(item => !item.done)
    setList(newListTask)
  }

  const onChangeStatusTask = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    const newListTask = list?.map(item => ({
      ...item,
      done: item.id === e.target.name ? e.target.checked : item.done,
    }))
    setList(newListTask)
  }

  return (
    <div>
      {list?.map((item, key) => (
        <Checkbox
          id={item.id}
          task={item.task}
          done={item.done}
          key={key}
          onChange={onChangeStatusTask}
        />
      ))}
      {list?.length ? (
        <button onClick={onClickRemoveTask}>Eliminar tareas compleadas</button>
      ) : (
        ''
      )}
    </div>
  )
}

ListTask.propTypes = listTaskPropsTypes
