import PropTypes, { InferProps } from 'prop-types'

export const loadingPropTypes = {
  sms: PropTypes.string.isRequired,
}

export type LoadingProps = InferProps<typeof loadingPropTypes>
