import { StreamerSection } from '../StreamerSection/StreamerSection'
import { CustomSelect } from '../../CustomSelect/CustomSelect'
import { type ChangeEvent, useState } from 'react'
import { Platform } from '../../../types.d'
import { useFilteredStreamers } from '../../../hooks/useFilteredStreamers'
import { currentCategoryStore } from '../../../stores/currentCategoryStore'
import { useStreamers } from '../../../hooks/useStreamers'

export const RightSection = () => {
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Object.values(Platform)[0])
    const [gameSearch, setGameSearch] = useState<string>('')
    const { streamers } = useStreamers()

    const currentCategory = currentCategoryStore((state) => state.currentCategory)

    const filteredStreamers = useFilteredStreamers({ streamers, currentCategory, selectedPlatform, query: gameSearch })

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
                                    <StreamerSection streamer={streamer} index={index + 1} key={streamer.id} />
                                )
                            })
                            : <div className='StreamerSection' style={{ color: '#797979' }}>No hay resultados</div>}
                    </div>
                    <button className='search-button' style={{ border: '1px solid #66fcf1', width: '95%' }} onClick={handleSearch}>Search Now</button>
                </div>
            </label>
        </div>
    )
}
