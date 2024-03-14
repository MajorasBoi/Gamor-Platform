import { create } from 'zustand'
import { type Streamer, type PromoStreamer } from '../types.d'

export const usePromoStreamer = create<PromoStreamer>()((set) => ({
    promoStreamer: undefined,
    setPromoStreamer: (streamer: Streamer) => set({ promoStreamer: streamer })
}))
