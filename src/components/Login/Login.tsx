import './Login.css'
import { loginVerification } from '../../services/loginVerification'

export const Login = () => {
    const { error, loginAction } = loginVerification()

    return (
        <div className='login-section'>
            <header className='login-header'>
                <h1>Log in to <span>Gamor</span></h1>
            </header>
            <main>
                <form id="login-form" onSubmit={loginAction}>
                    <div className='cl-inputs'>
                        <div className='input-container'>
                            <label htmlFor="username">
                                Username
                                <input name="username" type="text" />
                            </label>
                        </div>
                        <div className='input-container'>
                            <label htmlFor="password">
                                Password
                                <input name="password" type="password" />
                            </label>
                            <a href="#">Trouble logging in?</a>
                        </div>
                    </div>
                    {error !== null
                        ? <p style={{ color: 'red' }}>{error}</p>
                        : <></>}
                    <button className='login-button' type='submit' style={{ width: '100%' }}>Log in</button>
                </form>
            </main>
        </div>

    )
}
