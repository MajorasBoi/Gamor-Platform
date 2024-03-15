import { type User } from '../types'
import { fetchUsers } from './fetchUsers'

export const existsUser = async (candidate: User) => {
    const users = await fetchUsers()
    return users.some(user => user.username === candidate.username)
}
