export interface Event {
  actor: Actor
  created_at: string
  id: string
  payload: Payload
  repo: Repo
  public: true
  type: string
}

interface Repo {
  id: number
  name: string
  url: string
}

interface Payload {
  before: string
  commits: Commit[]
  distinct_size: number
  head: string
  push_id: number
  ref: string
  size: number
}

export interface Commit {
  author: Author
  distinct: boolean
  message: string
  sha: string
  url: string
}

interface Author {
  email: string
  name: string
}
export interface Actor {
  avatar_url: string
  display_login: string
  gravatar_id: string
  id: number
  login: string
  url: string
}

export type GetEventItemPressHandler = (event: Event) => () => void
