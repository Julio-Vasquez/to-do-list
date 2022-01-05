import PropTypes, { InferProps } from 'prop-types'

export const CheckboxPropTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  task: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export type CheckboxProps = InferProps<typeof CheckboxPropTypes>
