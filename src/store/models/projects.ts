import { createModel } from '@rematch/core'
import type { RootModel } from '../models'

type Project = {
  name: string
  url: string
  videoID: string
}

const initialState: Project[] = [
  
  {
    name: 'Sketchin',
    url: 'sketchin',
    video: document.getElementById('skReel') as HTMLVideoElement
  },
  {
    name: 'AQuest',
    url: 'aquest',
    video: document.getElementById('aqReel') as HTMLVideoElement
  },
  {
    name: 'Fastweb',
    url: 'fastweb',
    video: document.getElementById('fbReel') as HTMLVideoElement
  },
  {
    name: 'Feudi',
    url: 'feudi',
    video: document.getElementById('feudiReel') as HTMLVideoElement
  },
  {
    name: 'Claraluna',
    url: 'claraluna',
    video: document.getElementById('claralunaReel') as HTMLVideoElement
  }
]

export const projects = createModel<RootModel>()({
  state: initialState
})
