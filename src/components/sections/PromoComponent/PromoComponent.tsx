import { type StreamerAsProp } from '../../../types'

export const PromoComponent = ({ streamer }: StreamerAsProp) => {
    console.log(streamer.game_picture)

    return (
        <div className='container center'>
            <div className='header-section'>
                <h2>{streamer.game}</h2>
                <p>{streamer.username}</p>
                <div className='time-container'>
                    JOIN
                </div>
            </div>
            <img className="promo_pic" src={streamer.game_picture} alt="Image about the new Dota 2 season" />
        </div>
    )
}
