import { loadingPropTypes, LoadingProps } from './types'

export const Loading = ({ sms }: LoadingProps) => {
  return (
    <div>
      <span>{sms}</span>
    </div>
  )
}

Loading.propTypes = loadingPropTypes
