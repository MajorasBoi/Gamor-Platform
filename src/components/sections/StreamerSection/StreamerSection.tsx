import { type StreamerSectionProps } from '../../../types'
import './StreamerSection.css'

export const StreamerSection = ({ streamer, index = 0, handleOnClickPromoStreamer }: StreamerSectionProps) => {
    const onClickhandler = () => {
        handleOnClickPromoStreamer(streamer)
    }

    return (
        <div className='StreamerSection'>
            <div className='streamer_info'>
                <div className='index_indicator'>{index}</div>
                <p>{streamer.username}</p>
                <img className='avatar' src={streamer.avatar} alt={streamer.username} />
            </div>
            <button className='add_button' onClick={onClickhandler}>+</button>
        </div>
    )
}
