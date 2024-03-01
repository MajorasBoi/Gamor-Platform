import './App.css'
import { MainLayout } from './components/MainLayout'
import { PromoComponent } from './components/sections/PromoComponent/PromoComponent'
import { PageLayout } from './layouts/PageLayout'

function App() {
  return (
    <>
      <PageLayout>
        <MainLayout>
          <PromoComponent />
        </MainLayout>
      </PageLayout>
    </>
  )
}

export default App

// <MainPanel />