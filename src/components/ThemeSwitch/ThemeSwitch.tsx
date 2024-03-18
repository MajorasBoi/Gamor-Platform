import './ThemeSwitch.css'

export const ThemeSwitch = () => {
    const handleClick = () => {
        if (sessionStorage.getItem('theme') === '' || sessionStorage.getItem('theme') == null) {
            sessionStorage.setItem('theme', 'dark')
        } else {
            sessionStorage.setItem('theme', '')
        }
        document.body.classList.toggle('dark')
        const btn = document.querySelector('#switch')
        btn?.classList.toggle('active')
    }

    return (
        <button className={
            sessionStorage.getItem('theme') === '' ||
                sessionStorage.getItem('theme') == null
                ? 'switch'
                : 'switch active'
        } id="switch" onClick={handleClick}>
            <span></span>
            <span></span>
        </button>
    )
}
