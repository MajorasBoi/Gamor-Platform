import { useEffect, useState } from 'react'

export const useButtonClassName = (isRegisterButton: boolean) => {
    const [className, setClassName] = useState('btn')

    useEffect(() => {
        if (isRegisterButton) {
            setClassName('btn highlighted')
        } else {
            setClassName('btn')
        }
    }, [isRegisterButton])

    return className
}
