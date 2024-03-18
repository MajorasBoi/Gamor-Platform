import './Footer.css'
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch'

export function Footer() {
    return (
        <footer className='footer'>
            <ThemeSwitch />
            <p>Theme</p>
        </footer>
    )
}
