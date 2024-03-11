import { type ReactNode } from 'react'

export enum Platform {
    Party = 'Party',
    Matchs = 'Matchs',
    Streams = 'Streams'
}

export enum Categories {
    All = 'All',
    Strategy = 'Strategy',
    Simultaion = 'Simulation',
    Action = 'Action',
    MMORPG = 'MMORPG',
    Puzzle = 'Puzzle',
    Horror = 'Horror',
    Adventure = 'Adventure',
    Sports = 'Sports',
    FPS = 'FPS',
    RPG = 'RPG'
}

export interface Streamer {
    id: number
    username: string
    game: string
    avatar: string
    followers: number
    platform: Platform
    game_picture: string
    game_category: Categories
}

export interface StreamerAsProp {
    streamer: Streamer | undefined
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
    currentCategory: Categories
    selectedPlatform: Platform
    query: string
}

export interface CustomButtonProps {
    children: ReactNode
    isRegisterButton?: boolean
}

export interface RightSectionProps {
    streamers: Streamer[]
    currentCategory: Categories
    handleOnClickPromoStreamer: Function
}

export interface CategoryProps {
    category: Categories
    index?: number
    handleOnChangeCategory: Function
}

export interface PageLayoutProps {
    children: React.ReactNode
}

export interface CategoriesLayoutProps {
    handleOnChangeCategory: Function
}
