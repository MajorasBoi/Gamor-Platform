import { useEffect, useState } from 'react'
import { type UseFilteredStreamersProps, type Streamer, Categories } from '../types.d'
import { filterByPlatform } from '../services/filterByPlatform'
import { filterByQuery } from '../services/filterByQuery'
import { filterByCategory } from '../services/filterByCategory'

export const useFilteredStreamers = ({ streamers, currentCategory, selectedPlatform, query }: UseFilteredStreamersProps) => {
    const [filteredStreamers, setFilteredStreamers] = useState<Streamer[]>(streamers)

    useEffect(() => {
        let newFilteredStreamers = filterByPlatform(selectedPlatform, streamers)
        if (query !== '') {
            newFilteredStreamers = filterByQuery(newFilteredStreamers, query)
        }
        if (currentCategory !== Categories.All) {
            newFilteredStreamers = filterByCategory(newFilteredStreamers, currentCategory)
        }
        setFilteredStreamers(newFilteredStreamers)
    }, [selectedPlatform, streamers, currentCategory, query])

    return filteredStreamers
}
