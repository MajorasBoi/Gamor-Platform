import { usePromoStreamer } from '../../../hooks/usePromoStreamer'

export const PromoComponent = () => {
    const promoStreamer = usePromoStreamer((state) => state.promoStreamer)

    return (
        <a className='container center' href='#'>
            {promoStreamer === undefined
                ? <img className="promo_pic" src="/dota.jpg" alt="Image about the new Dota 2 season" />
                : <img className="promo_pic" src={promoStreamer.game_picture} alt="Image about the streaming" />
            }
            <div className='header-section'>
                <h2>{promoStreamer === undefined ? 'Dota 2 International' : promoStreamer.game}</h2>
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
