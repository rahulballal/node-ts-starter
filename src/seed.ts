/* eslint-disable @typescript-eslint/no-var-requires */
const uuid = require('uuid')

const familyMemberIds = [uuid.v4(), uuid.v4(), uuid.v4(), uuid.v4()]
const priorityIds = [uuid.v4(), uuid.v4(), uuid.v4()]
const statusIds = [uuid.v4(), uuid.v4(), uuid.v4()]

const familyMembers = [
  { id: familyMemberIds[0], displayName: 'mom' },
  { id: familyMemberIds[1], displayName: 'dad' },
  { id: familyMemberIds[2], displayName: 'son' },
  { id: familyMemberIds[3], displayName: 'daughter' },
]

const choreStatuses = [
  { id: statusIds[0], displayName: 'TODO' },
  { id: statusIds[1], displayName: 'PENDING' },
  { id: statusIds[2], displayName: 'BLOCKED' },
  { id: statusIds[3], displayName: 'COMPLETE' },
]

const priority = [
  { id: priorityIds[0], name: 'HIGH', rank: 1 },
  { id: priorityIds[1], name: 'MEDIUM', rank: 2 },
  { id: priorityIds[2], name: 'LOW', rank: 3 },
]

// @ts-ignore
const chores = []

const data = {
  familyMembers,
  priority,
  // @ts-ignore
  chores,
  choreStatuses,
}

export default data
