import './Index.css'
import { MainLayout } from '../../layouts/MainLayout'
import { PageLayout } from '../../layouts/PageLayout'
import { CategoriesLayout } from '../../layouts/CategoriesLayout'
import { LeftSection } from '../../components/sections/LeftSection/LeftSection'
import { PromoComponent } from '../../components/sections/PromoComponent/PromoComponent'
import { RightSection } from '../../components/sections/RightSection/RightSection'

export default function Index() {
    if (sessionStorage.getItem('theme') === 'light') {
        document.body.classList.value = 'light'
    }

    return (
        <>
            <PageLayout>
                <MainLayout className="main-container">
                    <LeftSection />
                    <PromoComponent />
                    <RightSection />
                </MainLayout>
                <CategoriesLayout />
            </PageLayout>
        </>
    )
}
