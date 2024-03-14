import './MainLayout.css'
import { LeftSection } from '../components/sections/LeftSection/LeftSection'
import { RightSection } from '../components/sections/RightSection/RightSection'
import { PromoComponent } from '../components/sections/PromoComponent/PromoComponent'

export const MainLayout = () => {
    return (
        <div className='main-container'>
            <LeftSection />
            <PromoComponent />
            <RightSection />
        </div>
    )
}
