import React, { createContext, useCallback, useState, useMemo } from 'react'
import { parse, format } from 'date-fns'

import api from '../../api'
import { Subscriber, SubscribeContextData, SubcribeResponse } from './types'

const SubscribeContext = createContext<SubscribeContextData>(
  {} as SubscribeContextData,
)

export const ProcessesProvider: React.FC = ({ children }) => {
  const [isFetching, setFetching] = useState(false)

  const subscribe = useCallback(
    async (
      selectiveProcessId: number,
      email: string,
      name: string,
      birth: Date,
    ) => {
      await api.post<SubcribeResponse>('/subscriber', {
        selectiveProcessId,
        email,
        name,
        birth: format(birth, 'yyyy-MM-dd'),
      })
    },
    [],
  )

  return (
    <SubscribeContext.Provider
      value={{
        isFetching,
        subscribe,
      }}
    >
      {children}
    </SubscribeContext.Provider>
  )
}

export default SubscribeContext
