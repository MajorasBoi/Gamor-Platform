import './PromoComponent.css'
import { promoStreamerStore } from '../../../stores/promoStreamerStore'

export const PromoComponent = () => {
    const promoStreamer = promoStreamerStore((state) => state.promoStreamer)

    return (
        <a className='container center' href='#'>
            {promoStreamer === undefined
                ? <img className="promo_pic" src="/dota.jpg" alt="Image about the new Dota 2 season" />
                : <img className="promo_pic" src={promoStreamer.game_picture} alt="Image about the streaming" />
            }
            <div className='header-section'>
                {promoStreamer === undefined ? <h2><span style={{ fontSize: '2rem', color: 'red' }}>Dota 2</span> International</h2> : <h2>{promoStreamer.game}</h2>}
                <p>{promoStreamer === undefined ? 'Join on April' : promoStreamer.username}</p>
                {
                    promoStreamer !== undefined && <div className='join-button'>
                        JOIN
                    </div>
                }
            </div>
        </a>
    )
}
