import './MainLayout.css'
import { LeftSection } from '../components/sections/LeftSection/LeftSection'
import { RightSection } from '../components/sections/RightSection/RightSection'
import { useStreamers } from '../hooks/useStreamers'
import { PromoComponent } from '../components/sections/PromoComponent/PromoComponent'
import { useState } from 'react'
import { type Streamer } from '../types'

export const MainLayout = () => {
    const { streamers } = useStreamers()
    const [promoStreamer, setPromoStreamer] = useState<Streamer | undefined>()
    console.log(promoStreamer)

    const handleOnClickPromoStreamer = (streamer: Streamer) => {
        const newStreamer = streamers.find((st) => st.username === streamer.username)
        setPromoStreamer(newStreamer)
    }

    return (
        <div className='main-container'>
            <LeftSection />
            <PromoComponent streamer={promoStreamer} />
            <RightSection streamers={streamers} handleOnClickPromoStreamer={handleOnClickPromoStreamer} />
        </div>
    )
}
