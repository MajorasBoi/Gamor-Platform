import { Categories, type CategoriesLayoutProps } from '../types.d'
import { Category } from '../components/Category/Category'

export const CategoriesLayout = ({ handleOnChangeCategory }: CategoriesLayoutProps) => {
    return (
        <div className='main-container categories-section'>
            <h2>Categories</h2>
            <article className='categories-container'>
                {Object.values(Categories).map((category, index) => {
                    if (category === 'All') {
                        return null
                    }
                    return (
                        <Category key={category} category={category} handleOnChangeCategory={handleOnChangeCategory} index={index} />
                    )
                })}
            </article>
        </div>
    )
}
