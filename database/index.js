const config = [
  {
    id: 1,
    img: '/static/1.jpg',
    description: 'よく来るやつ'
  },
  {
    id: 2,
    img: '/static/2.jpg',
    description: 'にゃーん'
  },
  {
    id: 3,
    img: '/static/3.jpg',
    description: 'ごろごろ'
  }
]

export function getConfig (id) {
  return config.find(conf => conf.id == id)
}
