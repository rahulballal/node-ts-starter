/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require('uuid')

const familyMemberIds = [uuid.v4(), uuid.v4(), uuid.v4(), uuid.v4()]
const priorityIds = [uuid.v4(), uuid.v4(), uuid.v4()]

const familyMembers = [
  { id: familyMemberIds[0], displayName: 'mom' },
  { id: familyMemberIds[1], displayName: 'dad' },
  { id: familyMemberIds[2], displayName: 'mom' },
  { id: familyMemberIds[3], displayName: 'mom' },
]

const priority = [
  { id: priorityIds[0], name: 'HIGH', rank: 1 },
  { id: priorityIds[1], name: 'MEDIUM', rank: 2 },
  { id: priorityIds[2], name: 'LOW', rank: 3 },
]

const chores = []
const data = {
  familyMembers,
  priority,
  chores,
}

console.log(data, null, 2)

module.exports = data
