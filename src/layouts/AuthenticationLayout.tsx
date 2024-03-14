import { MainLayout } from './MainLayout'
import { Login } from '../components/Login/Login'

export const AuthenticationLayout = () => {
    return (
        <div>
            <MainLayout className={'login-container'}>
                <Login />
            </MainLayout>
        </div>
    )
}
