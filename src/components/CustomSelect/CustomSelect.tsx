import { Platform } from '../StreamerSection/types.d'

export const CustomSelect = () => {
    return (
        <select className="selector" id="selector">
            {Object.values(Platform).map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    )
}
