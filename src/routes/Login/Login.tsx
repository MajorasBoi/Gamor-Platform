import { AuthenticationLayout } from '../../layouts/AuthenticationLayout'
import { redirect } from 'react-router-dom'
import { type User } from '../../types.d'
import { existsUser } from '../../services/existsUser'

export async function loginAction({ request }: { request: Request }) {
    const formData = await request.formData()
    const updatedValues = Object.fromEntries(formData)
    console.log(updatedValues)

    const newUser: User = {
        username: updatedValues.username.toString(),
        password: updatedValues.password.toString()
    }

    const exists = await existsUser(newUser)

    if (exists) {
        sessionStorage.setItem('username', newUser.username)
        return redirect('/')
    }
    return redirect('/login')
}

export function Login() {
    return (
        <AuthenticationLayout />
    )
}
