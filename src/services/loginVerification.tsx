import { useNavigate } from 'react-router-dom'
import { existsUser } from './existsUser'
import { type User } from '../types.d'
import { useState } from 'react'

export const loginVerification = () => {
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    async function loginAction(e) {
        e.preventDefault()

        if (e.target.username.value === '') {
            return setError('Must introduce a username.')
        }
        if (e.target.password.value === '') {
            return setError('Must introduce a password.')
        }

        const newUser: User = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const exists = await existsUser(newUser)

        if (exists) {
            sessionStorage.setItem('username', newUser.username)
            return navigate('/')
        }
        return setError('Incorrect username or password')
    }

    return { error, loginAction }
}
