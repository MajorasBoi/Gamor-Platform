import './CustomSelect.css'
import { Platform, type CustomSelectProps } from '../../types.d'

export const CustomSelect = ({ onChange, selectedPlatform }: CustomSelectProps) => {
    return (
        <select onChange={onChange} value={selectedPlatform}>
            {Object.values(Platform).map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    )
}
