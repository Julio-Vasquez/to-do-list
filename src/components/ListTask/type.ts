import PropTypes, { InferProps } from 'prop-types'

export const listTaskPropsTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      task: PropTypes.string.isRequired,
    }).isRequired
  ),
  setList: PropTypes.func.isRequired,
}

export type listTaskProps = InferProps<typeof listTaskPropsTypes>
