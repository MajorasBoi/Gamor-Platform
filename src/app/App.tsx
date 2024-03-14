import './App.css'
import { MainLayout } from '../layouts/MainLayout'
import { PageLayout } from '../layouts/PageLayout'
import { CategoriesLayout } from '../layouts/CategoriesLayout'

function App() {
  return (
    <>
      <PageLayout>
        <MainLayout />
        <CategoriesLayout />
      </PageLayout>
    </>
  )
}

export default App
