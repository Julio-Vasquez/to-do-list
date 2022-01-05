import PropTypes, { InferProps } from 'prop-types'

export const CheckboxPropTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
}

export type CheckboxProps = InferProps<typeof CheckboxPropTypes>
