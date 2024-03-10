import { StreamerSection } from '../StreamerSection/StreamerSection'
import { CustomSelect } from '../../CustomSelect/CustomSelect'
import { type ChangeEvent, useState } from 'react'
import { Platform, type RightSectionProps } from '../../../types.d'
import { useFilteredStreamers } from '../../../hooks/useFilteredStreamers'

export const RightSection = ({ streamers, handleOnClickPromoStreamer }: RightSectionProps) => {
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Object.values(Platform)[0])
    const [gameSearch, setGameSearch] = useState<string>('')
    const filteredStreamers = useFilteredStreamers({ streamers, selectedPlatform, query: gameSearch })

    const handleSelectorChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlatform(e.target.value as Platform)
    }

    const handleSearch = () => {
        const searchBar = document.getElementById('search-bar') as HTMLInputElement
        setGameSearch(searchBar.value)
    }

    return (
        <div className='container right'>
            <label htmlFor="selector">
                <h4>Choose a platform</h4>
                <CustomSelect onChange={handleSelectorChange} selectedPlatform={selectedPlatform} />
            </label>
            <label htmlFor="search-bar">
                <h4>Search Game</h4>
                <div className="search-container">
                    <input id="search-bar" type="text" placeholder="Call of Duty Warzone" />
                    <div className="search-results">
                        {filteredStreamers.length > 0
                            ? filteredStreamers.map((streamer, index) => {
                                return (
                                    <StreamerSection streamer={streamer} index={index + 1} key={streamer.id} handleOnClickPromoStreamer={handleOnClickPromoStreamer} />
                                )
                            })
                            : <div className='StreamerSection' style={{ color: '#797979' }}>No hay resultados</div>}
                    </div>
                    <button className='search-button' onClick={handleSearch}>Search Now</button>
                </div>
            </label>
        </div>
    )
}
