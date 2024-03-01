import { useButtonClassName } from '../../hooks/useButtonClassName'
import './CustomButton.css'

export const CustomButton = ({ children, isRegisterButton = false }) => {
    const className = useButtonClassName(isRegisterButton)

    return (
        <a href="#" className={className}><button>{children}</button></a>
    )
}
