export type Subscriber = {
  email: string,
  name: string,
  birth: string
}

export interface SelectiveProcessResponse {
  id: string,
  title: string,
  descrption: string,
  deadline: string,
  method_of_contact: string  
}

export interface SubcribeResponse extends Subscriber{
  // eslint-disable-next-line camelcase
  message: string,
  id: number,
  selectiveProcessId: SelectiveProcessResponse
}

export interface SubscribeContextData {
  isFetching: boolean
  
  subscribe: (
    selectiveProcessId: number,
    email: string,
    name: string,
    birth: Date,
  ) => Promise<void>
}
