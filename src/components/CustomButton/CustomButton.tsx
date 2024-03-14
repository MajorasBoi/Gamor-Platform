import { useButtonClassName } from '../../hooks/useButtonClassName'
import { type CustomButtonProps } from '../../types.d'
import { Link } from 'react-router-dom'
import './CustomButton.css'

export const CustomButton = ({ children, isRegisterButton = false }: CustomButtonProps) => {
    const className = useButtonClassName(isRegisterButton)

    if (!isRegisterButton) {
        return <Link to={'login'} className={className}><button>{children}</button></Link>
    } else {
        return <Link to={'register'} className={className}><button>{children}</button></Link>
    }
}
