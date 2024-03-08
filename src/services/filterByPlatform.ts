import { type Streamer, type Platform } from '../types.d'

export const filterByPlatform = (platform: Platform, streamers: Streamer[]) => {
    const newFilteredStreamers = streamers.filter(streamer => streamer.platform === platform)
    return newFilteredStreamers
}
