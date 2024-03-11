import { type CategoryProps } from '../../types.d'

export const Category = ({ category, index, handleOnChangeCategory }: CategoryProps) => {
    const changeCategory = () => {
        handleOnChangeCategory(category)
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
