export enum Platform {
    Party = 'Party',
    Matchs = 'Matchs',
    Streams = 'Streams'
}

export interface Streamer {
    id: number
    username: string
    game: string
    avatar: string
    followers: number
    platform: Platform
}

export interface StreamerSectionProps {
    streamer: Streamer
    index: number
}
