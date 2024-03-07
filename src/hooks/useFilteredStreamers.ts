import { useEffect, useState } from 'react'
import { type UseFilteredStreamersProps, type Streamer } from '../types.d'

export const useFilteredStreamers = ({ streamers, selectedPlatform }: UseFilteredStreamersProps) => {
    const [filteredStreamers, setFilteredStreamers] = useState<Streamer[]>(streamers)

    useEffect(() => {
        const filtered = streamers.filter(streamer => streamer.platform === selectedPlatform)
        setFilteredStreamers(filtered)
    }, [selectedPlatform, streamers])

    return filteredStreamers
}
