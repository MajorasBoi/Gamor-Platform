import './CategoriesLayout.css'
import { Categories } from '../types.d'
import { Category } from '../components/Category/Category'

export const CategoriesLayout = () => {
    return (
        <div className='main-container categories-section'>
            <h2>Categories</h2>
            <article className='categories-container'>
                {Object.values(Categories).map((category, index) => {
                    if (category === 'All') {
                        return null
                    }
                    return (
                        <Category key={category} category={category} index={index} />
                    )
                })}
            </article>
        </div>
    )
}
