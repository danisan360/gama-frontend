import { useContext } from 'react'

import SubscribeContext from '../contexts/subscribe'
import { SubscribeContextData } from '../contexts/subscribe/types'

const useSubscribe = (): SubscribeContextData => {
  const subscribeContext = useContext(SubscribeContext)

  if (!subscribeContext) {
    throw new Error('useSubscribe only can be used within SubscribeProvider')
  }

  return subscribeContext
}

export default useSubscribe
