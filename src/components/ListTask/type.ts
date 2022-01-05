import PropTypes, { InferProps } from 'prop-types'

export const listTaskPropsTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
    }).isRequired
  ),
}

export type listTaskProps = InferProps<typeof listTaskPropsTypes>
