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
    game_picture: string
}

export interface StreamerAsProp {
    streamer: Streamer
}

export interface StreamerSectionProps {
    streamer: Streamer
    index: number
    handleOnClickPromoStreamer: Function
}

export interface CustomSelectProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    selectedPlatform: Platform
}

export interface UseFilteredStreamersProps {
    streamers: Streamer[]
    selectedPlatform: Platform
    query: string
}

export interface CustomButtonProps {
    children: ReactNode
    isRegisterButton?: boolean
}

export interface RightSectionProps {
    streamers: Streamer[]
    handleOnClickPromoStreamer: Function
}
