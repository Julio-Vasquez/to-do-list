import PropTypes, { InferProps } from 'prop-types'

export const useInputPropTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  val: PropTypes.string,
}

export type useInputProps = InferProps<typeof useInputPropTypes>
