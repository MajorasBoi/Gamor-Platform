import { create } from 'zustand'
import { type Streamer, type PromoStreamer } from '../types'

export const promoStreamerStore = create<PromoStreamer>()((set) => ({
    promoStreamer: undefined,
    setPromoStreamer: (streamer: Streamer) => set({ promoStreamer: streamer })
}))
