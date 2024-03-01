import './MainLayout.css'
import { LeftSection } from './sections/LeftSection/LeftSection'
import { RightSection } from './sections/RightSection/RightSection'

export const MainLayout = ({ children }) => {
    return (
        <div className='main-container'>
            <LeftSection />
            {children}
            <RightSection />
        </div>
    )
}

// TODO Mejorar css
