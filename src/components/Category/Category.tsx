import { type CategoryProps } from '../../types.d'

export const Category = ({ category, index }: CategoryProps) => {
    return (
        <div className='category-box'>
            <div>
                <p>{index}/</p>
                <p>{category}</p>
                <p>▶</p>
            </div>
        </div>
    )
}
