import { useState, ChangeEvent } from 'react'

import { useInputProps, useInputPropTypes } from './type'

export const useInput = ({ max, min, val = undefined }: useInputProps) => {
  const [input, setInput] = useState({
    value: val,
    error: false,
    message: '',
  })

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < min || e.target.value.length > max)
      setInput({
        ...input,
        value: e.target.value,
        error: true,
        message:
          e.target.value.length < min
            ? `El campo debe tener minimo: ${min} caracteres`
            : `El campo no debe tener exceder: ${max} caracteres`,
      })
    else
      setInput({
        ...input,
        value: e.target.value,
        error: false,
        message: '✔️',
      })
  }

  return {
    ...input,
    onChangeInput,
  }
}

useInput.propTypes = useInputPropTypes
