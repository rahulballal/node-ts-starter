import { print, Message } from './index'

test('should return true', () => {
  // Arrange
  const message: Message = {
    message: 'Hello',
    to: 'Jest',
  }

  // Act
  const actual = print(message)

  // Assert
  expect(actual).toBe(true)
})
