import './App.css'
import { MainLayout } from '../layouts/MainLayout'
import { PageLayout } from '../layouts/PageLayout'
import { CategoriesLayout } from '../layouts/CategoriesLayout'
import { useState } from 'react'
import { Categories } from '../types.d'

function App() {
  const [currentCategory, setCategory] = useState<Categories>(Categories.All)

  const handleOnChangeCategory = (category: Categories) => {
    setCategory(category)
  }

  return (
    <>
      <PageLayout>
        <MainLayout category={currentCategory} />
        <CategoriesLayout handleOnChangeCategory={handleOnChangeCategory} />
      </PageLayout>
    </>
  )
}

export default App
