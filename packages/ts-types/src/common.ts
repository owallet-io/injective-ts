export interface StreamStatusResponse {
  details: string
  code: number
  metadata: any
}

export enum StreamOperation {
  Insert = 'insert',
  Delete = 'delete',
  Replace = 'replace',
  Update = 'update',
  Invalidate = 'invalidate',
}

export interface PaginationOption {
  key: string
  offset?: number
  skip?: number
  limit?: number
  reverse?: boolean
  countTotal?: boolean
}

export interface Constructable<T> {
  new (...args: never): T
}

export type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T
