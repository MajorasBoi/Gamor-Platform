import { type Categories, type Streamer } from '../types.d'

export const filterByCategory = (streamers: Streamer[], category: Categories) => {
    const filteredStreamers = streamers.filter(streamer => streamer.game_category === category)
    return filteredStreamers
}
