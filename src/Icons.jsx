export const SaturnIcon = ({width, height}) => {
    return (
        <svg width={width || 75} height={height || 45} viewBox="0 0 75 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4638 22.5C19.4638 12.835 27.5693 5 37.5679 5C47.5665 5 55.672 12.835 55.672 22.5C55.672 32.165 47.5665 40 37.5679 40C27.5693 40 19.4638 32.165 19.4638 22.5Z" fill="#4488ED" stroke="#4488ED" strokeWidth="10"/>
            <path d="M18.5 36.5C25.5 36.5 39.7998 35.4452 53.6259 25.976" stroke="#0F0916" strokeWidth="5" strokeLinecap="round"/>
            <path d="M3.15769 30.5908C0.987684 24.7775 21.6905 16.3454 35.8938 12.8511C49.4329 9.52021 69.932 7.45731 71.668 12.8511C73.404 18.2449 51.8899 27.8251 38.4358 30.5908C24.9818 33.3566 5.3277 36.4041 3.15769 30.5908Z" stroke="#4488ED" strokeWidth="5"/>
        </svg>
    );
}

export const ArrowDownIcon = ({width, height, stroke, strokeWidth, fill}) => {
    return(
        <svg width={width || 39} height={height || 22} viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 19.5L37 2H2L19.5 19.5Z" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export const SignUpIcon = ({stroke, strokeWidth, width, height}) => {
    return (
        <svg width={width || 26} height={height || 26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1H25V25H5M1 13H15M15 13L10.5 7M15 13L10.5 18.5" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export const PlusIcon = ({stroke, strokeWidth, width, height}) => {
    return(
        <svg width={width || 29} height={height || 29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 2L14.5 27M2 14.766L27 14.766" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

}