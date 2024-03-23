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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Test username: Admin</p>
                <p>Password: asd</p>
            </div>
            <Footer />
        </div>
    )
}
