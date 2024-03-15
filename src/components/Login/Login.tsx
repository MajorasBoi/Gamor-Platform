import { Form } from 'react-router-dom'
import './Login.css'

export const Login = () => {
    return (
        <div className='login-section'>
            <header className='login-header'>
                <h1>Log in to <span>Gamor</span></h1>
            </header>
            <main>
                <Form method="post" id="login-form">
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
                    <button className='search-button' type='submit' style={{ border: '1px solid #66fcf1', width: '100%' }}>Log in</button>
                </Form>
            </main>
        </div>
    )
}
