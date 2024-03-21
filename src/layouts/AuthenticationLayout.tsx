import './AuthenticationLayout.css'
import { MainLayout } from './MainLayout'
import { Login } from '../components/Login/Login'
import { Footer } from '../components/Footer/Footer'

export const AuthenticationLayout = () => {
    return (
        <div>
            <MainLayout className={'login-container'}>
                <Login />
            </MainLayout>
            <Footer />
        </div>
    )
}
