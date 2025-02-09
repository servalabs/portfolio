import { createModel } from '@rematch/core'
import type { RootModel } from '../models'

type Project = {
  name: string
  url: string
  videoID: string
}

const initialState: Project[] = [
  
  {
    name: 'AQuestee',
    url: 'aquest',
    videoID: 'aqReel'
  },

  {
    name: 'Claraluna',
    url: 'claraluna',
    videoID: 'claralunaReel'
  }
]

export const projects = createModel<RootModel>()({
  state: initialState
})
