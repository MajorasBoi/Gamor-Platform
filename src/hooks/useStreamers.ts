import { useState, useEffect } from 'react'
import { type Streamer } from '../components/StreamerSection/types.d'
import { fetchStreamers } from '../services/fetchData'

export function useStreamers() {
    const [streamers, setStreamers] = useState<Streamer[]>([])

    useEffect(() => {
        void fetchStreamers().then(result => {
            setStreamers(result)
        })
    }, [])

    return { streamers }
}
