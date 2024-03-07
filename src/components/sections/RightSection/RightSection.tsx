import { StreamerSection } from '../../StreamerSection/StreamerSection'
import { useStreamers } from '../../../hooks/useStreamers'
import { CustomSelect } from '../../CustomSelect/CustomSelect'

export const RightSection = () => {
    const { streamers } = useStreamers()
    return (
        <div className='container right'>
            <label htmlFor="selector">
                <h4>Choose a platform</h4>
                <CustomSelect />
            </label>
            <label htmlFor="search-bar">
                <h4>Search Game</h4>
                <div className="search-container">
                    <input id="search-bar" type="text" placeholder="Call of Duty Warzone" />
                    <div className="search-results">
                        {streamers?.map(streamer => {
                            return (
                                <StreamerSection streamer={streamer} index={streamer.id} key={streamer.id} />
                            )
                        })}
                    </div>
                    <button className='search-button'>Search Now</button>
                </div>
            </label>
        </div>
    )
}
