import './MainLayout.css'
import { LeftSection } from '../components/sections/LeftSection/LeftSection'
import { RightSection } from '../components/sections/RightSection/RightSection'

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
