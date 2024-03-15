import { type User } from '../types.d'

export async function fetchUsers() {
    return await fetch('http://localhost:5173/users/users.json')
        .then(async response => await response.json() as { Users: User[] })
        .then(data => {
            return data.Users
        })
        .catch(error => {
            console.error('Error: ', error)
            return []
        })
}
