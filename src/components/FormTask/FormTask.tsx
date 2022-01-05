import { v4 } from 'uuid'

import { useInput } from './../../hooks/useInput'

import styles from './FormTask.module.scss'

import { FormTaskPropTypes, FormTraskProps } from './types'

export const FormTask = ({ handleAddTask }: FormTraskProps) => {
  const { error, message, value, onChangeInput } = useInput({ max: 80, min: 3 })

  const handleAdd = () => {
    handleAddTask({
      id: v4(),
      date: new Date().toLocaleDateString(),
      task: value,
    })
  }

  return (
    <div className={`${styles.form}`}>
      <div className={`${styles.content}`}>
        <input type="text" onChange={onChangeInput} />
        <button disabled={error || !value} onClick={handleAdd}>
          ADD
        </button>
      </div>
      <span className={`${error ? styles.error : styles.success}`}>
        {!value ? '' : message}
      </span>
    </div>
  )
}

FormTask.propTypes = FormTaskPropTypes
