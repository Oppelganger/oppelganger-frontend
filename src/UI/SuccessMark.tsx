const SuccessMark = ({ fill, additionalStyles }: { fill: string, additionalStyles: string }) => {
    return (
        <svg className={additionalStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40rem" height="40rem">
            <defs>
                <linearGradient x1="21.241" y1="39.241" x2="3.541" y2="21.541" gradientUnits="userSpaceOnUse" id="color-1">
                    <stop offset="0.108" stopColor="#2ed82d" />
                    <stop offset="0.433" stopColor="#2ed82d" />
                </linearGradient>
                <linearGradient x1="44.41029" y1="9.58989" x2="14.59" y2="39.41123" gradientUnits="userSpaceOnUse" id="color-2">
                    <stop offset="0" stopColor="#2dd888" />
                    <stop offset="1" stopColor="#2ed82d" />
                </linearGradient>
            </defs>
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <g transform="scale(5.33333,5.33333)">
                    <path d="M16.599,41.42l-15.019,-15.019c-0.774,-0.774 -0.774,-2.028 0,-2.802l4.019,-4.019c0.774,-0.774 2.028,-0.774 2.802,0l15.019,15.019c0.774,0.774 0.774,2.028 0,2.802l-4.019,4.019c-0.774,0.773 -2.028,0.773 -2.802,0z" fill={fill ? fill : 'url(#color-1)'} />
                    <path d="M12.58,34.599l27.019,-27.019c0.774,-0.774 2.028,-0.774 2.802,0l4.019,4.019c0.774,0.774 0.774,2.028 0,2.802l-27.019,27.019c-0.774,0.774 -2.028,0.774 -2.802,0l-4.019,-4.019c-0.773,-0.774 -0.773,-2.028 0,-2.802z" fill={fill ? fill : 'url(#color-2)'} />
                </g>
            </g>
        </svg>
    )
}

export default SuccessMark