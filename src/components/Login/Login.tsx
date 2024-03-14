import { Form } from 'react-router-dom'
import './Login.css'

export const Login = () => {
    return (
        <div className='login-section'>
            <header className='login-header'>
                <h1>Log in to <span>Gamor</span></h1>
            </header>
            <main>
                <div>
                    <Form method="post" id="login-form">
                        <div className='input-container'>
                            <label htmlFor="username">
                                Username
                                <input id="username" type="text" />
                            </label>
                        </div>
                        <div className='input-container'>
                            <label htmlFor="password">
                                Password
                                <input id="password" type="password" />
                            </label>
                        </div>
                    </Form>
                    <a href="#">Trouble logging in?</a>
                </div>
                <button className='search-button' style={{ border: '1px solid #66fcf1', width: '100%' }}>Log in</button>
            </main>
        </div>
    )
}
