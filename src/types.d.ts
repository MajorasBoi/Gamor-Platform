import { type ReactNode } from 'react'

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

export interface CustomSelectProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    selectedPlatform: Platform
}

export interface UseFilteredStreamersProps {
    streamers: Streamer[]
    selectedPlatform: Platform
}

export interface CustomButtonProps {
    children: ReactNode
    isRegisterButton?: boolean
}
