import { useButtonClassName } from '../../hooks/useButtonClassName'
import { type CustomButtonProps } from '../../types'
import './CustomButton.css'

export const CustomButton = ({ children, isRegisterButton = false }: CustomButtonProps) => {
    const className = useButtonClassName(isRegisterButton)

    return (
        <a href="#" className={className}><button>{children}</button></a>
    )
}
