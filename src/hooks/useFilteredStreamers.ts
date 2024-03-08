import { useEffect, useState } from 'react'
import { type UseFilteredStreamersProps, type Streamer } from '../types.d'
import { filterByPlatform } from '../services/filterByPlatform'
import { filterByQuery } from '../services/filterByQuery'

export const useFilteredStreamers = ({ streamers, selectedPlatform, query }: UseFilteredStreamersProps) => {
    const [filteredStreamers, setFilteredStreamers] = useState<Streamer[]>(streamers)

    useEffect(() => {
        if (query !== '') {
            let newFilteredStreamers = filterByQuery(streamers, query)
            newFilteredStreamers = filterByPlatform(selectedPlatform, newFilteredStreamers)
            setFilteredStreamers(newFilteredStreamers)
        } else {
            const newFilteredStreamers = filterByPlatform(selectedPlatform, streamers)
            setFilteredStreamers(newFilteredStreamers)
        }
    }, [selectedPlatform, streamers, query])

    return filteredStreamers
}
