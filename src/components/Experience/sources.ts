export type Source = {
  name: string
  path: string | string[]
  type: string
}

export type Sources = Source[]

const sources: Sources = [
  // {
  //   name: "environmentMapTexture",
  //   type: "hdr",
  //   path: "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr",
  // },
  // {
  //   name: 'envMap',
  //   type: 'cubeTexture',
  //   path: [
  //     '/textures/env/1/nx.jpg',
  //     '/textures/env/1/px.jpg',
  //     '/textures/env/1/ny.jpg',
  //     '/textures/env/1/py.jpg',
  //     '/textures/env/1/nz.jpg',
  //     '/textures/env/1/pz.jpg'
  //   ]
  // },
  // {
  //   name: 'manColor',
  //   type: 'texture',
  //   path: '/textures/man/color.jpeg'
  // },
  // {
  //   name: 'manAO',
  //   type: 'texture',
  //   path: '/textures/man/AO.jpeg'
  // },
  // {
  //   name: 'manNormal',
  //   type: 'texture',
  //   path: '/textures/man/normal.jpeg'
  // },
  // {
  //   name: 'manMetallic',
  //   type: 'texture',
  //   path: '/textures/man/metallic.jpeg'
  // },
  // {
  //   name: 'manRoughness',
  //   type: 'texture',
  //   path: '/textures/man/roughness.jpeg'
  // },
  // {
  //   name: 'manHeight',
  //   type: 'texture',
  //   path: '/textures/man/height.jpeg'
  // },
  // {
  //   name: 'manSkin',
  //   type: 'texture',
  //   path: 'https://i.imgur.com/oYS135g.jpeg'
  // },
  // {
  //   name: 'manSkinDisplacement',
  //   type: 'texture',
  //   path: 'https://i.imgur.com/L1pqRg9.jpeg'
  // },
  // {
  //   name: 'manOutlineSkin',
  //   type: 'texture',
  //   path: '/textures/outline/pattern.jpg'
  // },
  {
    name: 'noise',
    type: 'texture',
    path: '/textures/noise/noise.jpeg'
  },
  {
    name: 'pow',
    type: 'texture',
    path: '/images/battery.png'
  },
  {
    name: 'manVibrantSkin',
    type: 'texture',
    path: '/textures/outline/2c.jpg'
  },
  {
    name: 'manModel',
    type: 'gltfModel',
    path: '/models/Man/Man7.glb'
  },
  {
    name: 'venice',
    type: 'texture',
    path: '/images/venice.jpeg'
  },
  {
    name: 'sketchin',
    type: 'texture',
    path: '/images/sketchin.jpg'
  },
  {
    name: 'tcmgtk',
    type: 'texture',
    path: '/images/tcmg.jpeg'
  },
  {
    name: 'pow',
    type: 'texture',
    path: '/images/battery.png'
  },
  {
    name: 'tesla',
    type: 'texture',
    path: '/images/tesla.jpeg'
  },
  {
    name: 'bw',
    type: 'texture',
    path: '/images/bw.jpg'
  },
  {
    name: 'no1',
    type: 'texture',
    path: '/images/no1.jpg'
  },
  {
    name: 'no2',
    type: 'texture',
    path: '/images/no2.jpg'
  },
  {
    name: 'aicoder',
    type: 'texture',
    path: '/images/plaud-ai-recorder.jpg'
  },
  {
    name: 'rocket',
    type: 'texture',
    path: '/images/rocket-eg.jpg'
  },
  {
    name: 'no3',
    type: 'texture',
    path: '/images/no3.jpg'
  },
  {
    name: 'IMZ',
    type: 'texture',
    path: '/images/IMZ.jpg'
  },
  {
    name: 'IMS',
    type: 'texture',
    path: '/images/IMS.jpg'
  },
  {
    name: 'IMSS',
    type: 'texture',
    path: '/images/IMSS.png'
  },
  {
    name: 'IMPA',
    type: 'texture',
    path: '/images/IMPA.png'
  },
  {
    name: 'IMT',
    type: 'texture',
    path: '/images/IMT.jpg'
  },
  {
    name: 'IMZ',
    type: 'texture',
    path: '/images/IMZ.jpg'
  },
  {
    name: 'IMMM',
    type: 'texture',
    path: '/images/IMMM.jpg'
  }
]

export default sources
