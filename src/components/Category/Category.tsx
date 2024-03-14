import { type CategoryProps } from '../../types.d'
import { useCurrentCategory } from '../../hooks/useCurrentCategory'

export const Category = ({ category, index }: CategoryProps) => {
    const setCurrentCategory = useCurrentCategory((state) => state.setCurrentCategory)

    const changeCategory = () => {
        setCurrentCategory(category)
    }

    return (
        <div className='category-box' onClick={changeCategory}>
            <div>
                <p>{index}/</p>
                <p>{category}</p>
                <p>▶</p>
            </div>
        </div>
    )
}
