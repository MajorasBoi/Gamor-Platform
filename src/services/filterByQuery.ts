import { type Streamer } from '../types'

export const filterByQuery = (streamers: Streamer[], query: string) => {
    const trimmedQuery = query.trim()

    const newFilteredStreamers = streamers.filter((streamer: Streamer) => {
        return streamer.game.toLowerCase().includes(trimmedQuery.toLowerCase())
    })

    return newFilteredStreamers
}
