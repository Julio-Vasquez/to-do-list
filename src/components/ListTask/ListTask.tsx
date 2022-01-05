import { listTaskProps, listTaskPropsTypes } from './type'

import { Checkbox } from './../Checkbox'

export const ListTask = ({ list }: listTaskProps) => {
  return (
    <div>
      {list?.map((item, key) => (
        <Checkbox {...item} key={key} />
      ))}
    </div>
  )
}

ListTask.propTypes = listTaskPropsTypes
