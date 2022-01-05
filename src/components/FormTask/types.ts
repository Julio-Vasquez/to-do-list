import PropTypes, { InferProps } from 'prop-types'

export const FormTaskPropTypes = {
  handleAddTask: PropTypes.func.isRequired,
}

export type FormTraskProps = InferProps<typeof FormTaskPropTypes>
