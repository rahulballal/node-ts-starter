import seedData from './seed'
export type Message = {
  message: string
  to: string
}

const msg: Message = { message: 'Hello', to: '2022' }

export function print(msg: Message) {
  console.info(msg)
  return true
}

print(msg)

console.info(seedData)
