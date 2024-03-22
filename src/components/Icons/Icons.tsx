export const PlayIcon = () => {
    return (
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVG-play"> <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" strokeWidth="2" strokeLinejoin="round" /> </g>
        </svg>
    )
}

export const PauseIcon = () => {
    return (
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVG-pause"> <path d="M8 5V19M16 5V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g>
        </svg>
    )
}

export const HamburgerIcon = () => {
    const handleClick = (e) => {
        const links = document.querySelector('.nav-links')
        links?.classList.toggle('show')
        e.target.classList.toggle('active-hamb')
        console.log(e.target)
    }

    return (
        <svg className="hamb-icon" onClick={handleClick} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7L4 7" stroke="#66fcf1" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 12L4 12" stroke="#66fcf1" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 17L4 17" stroke="#66fcf1" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    )
}
