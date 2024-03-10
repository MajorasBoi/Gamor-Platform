import { type StreamerAsProp } from '../../../types'

export const PromoComponent = ({ streamer }: StreamerAsProp) => {
    return (
        <div className='container center'>
            {streamer === undefined
                ? <img className="promo_pic" src="/dota.jpg" alt="Image about the new Dota 2 season" />
                : <img className="promo_pic" src={streamer.game_picture} alt="Image about the streaming" />
            }
            <div className='header-section'>
                <h2>{streamer === undefined ? 'Dota 2 International' : streamer.game}</h2>
                <p>{streamer === undefined ? 'Join on April' : streamer.username}</p>
                <div className='join-button'>
                    JOIN
                </div>
            </div>
        </div>
    )
}
