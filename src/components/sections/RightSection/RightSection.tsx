import { StreamerSection } from '../../StreamerSection/StreamerSection'
import { useStreamers } from '../../../hooks/useStreamers'
import { CustomSelect } from '../../CustomSelect/CustomSelect'
import { type ChangeEvent, useState } from 'react'
import { Platform } from '../../../types.d'
import { useFilteredStreamers } from '../../../hooks/useFilteredStreamers'

export const RightSection = () => {
    const { streamers } = useStreamers()
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Object.values(Platform)[0])
    const filteredStreamers = useFilteredStreamers({ streamers, selectedPlatform })

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlatform(e.target.value as Platform)
    }

    return (
        <div className='container right'>
            <label htmlFor="selector">
                <h4>Choose a platform</h4>
                <CustomSelect onChange={handleOnChange} selectedPlatform={selectedPlatform} />
            </label>
            <label htmlFor="search-bar">
                <h4>Search Game</h4>
                <div className="search-container">
                    <input id="search-bar" type="text" placeholder="Call of Duty Warzone" />
                    <div className="search-results">
                        {filteredStreamers.map((streamer, index) => {
                            return (
                                <StreamerSection streamer={streamer} index={index + 1} key={streamer.id} />
                            )
                        })}
                    </div>
                    <button className='search-button'>Search Now</button>
                </div>
            </label>
        </div>
    )
}
