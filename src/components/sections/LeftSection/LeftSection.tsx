import { CustomButton } from '../../CustomButton/CustomButton'

export const LeftSection = () => {
    return (
        <div className='container left'>
            <div className='headers-container'>
                <h1>Join the</h1>
                <h1 style={{ color: '#66fcf1' }}>Stream Party</h1>
                <h1>on Gamor!</h1>
            </div>
            <div className='mod1-container'>
                <p style={{ paddingBottom: '1rem' }}><span>Gamor</span> now has a <span>stream party</span> platform</p>
                <div>
                    <CustomButton>Sign In</CustomButton>
                    <CustomButton isRegisterButton={true}>Register</CustomButton>
                </div>
            </div>
        </div>
    )
}