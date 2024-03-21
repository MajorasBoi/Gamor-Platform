import './Category.css'
import { Categories, type CategoryProps } from '../../types.d'
import { currentCategoryStore } from '../../stores/currentCategoryStore'
import { PauseIcon, PlayIcon } from '../Icons/Icons'

export const Category = ({ category, index }: CategoryProps) => {
    const { currentCategory, setCurrentCategory } = currentCategoryStore()

    const changeCategory = () => {
        if (currentCategory === category) {
            setCurrentCategory(Categories.All)
        } else {
            setCurrentCategory(category)
        }
    }

    return (
        <div className={`category-box ${currentCategory === category
            ? 'selected'
            : ''}`}
            onClick={changeCategory}>
            <div>
                <p>{index}/</p>
                <p>{category}</p>
                {currentCategory !== category
                    ? <PlayIcon />
                    : <PauseIcon />
                }
            </div>
        </div>
    )
}
