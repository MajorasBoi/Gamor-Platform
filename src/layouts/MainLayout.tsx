import { type ReactNode } from 'react'
import './MainLayout.css'

export const MainLayout = ({ children, className }: { children: ReactNode, className: string }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
