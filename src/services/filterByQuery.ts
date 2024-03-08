import { type Streamer } from '../types'

export const filterByQuery = (streamers: Streamer[], query: string) => {
    const newFilteredStreamers = streamers.filter((streamer: Streamer) => {
        return streamer.game.toLowerCase().includes(query.toLowerCase())
    })

    return newFilteredStreamers
}
