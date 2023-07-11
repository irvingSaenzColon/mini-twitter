export const TwitterIcon = () => {
    return (
        <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5 6.90067C26.5 11.4007 19.5 29.4007 1 21.9007C3.7997 20.8971 6 21.0742 8 18.9007C4.5 17.9007 3.5 15.9007 3.5 15.9007C3.5 15.9007 5.73144 15.7176 6.5 15C1.5 13 1 9.40067 1 9.40067H4.5C0.5 5.90067 2 2.40067 2 2.40067C2 2.40067 5.5 7.40067 13.5 7.90067C15.3075 6.38422 12.315 4.29206 16.5 1.90066C20.5 -0.385001 23 2.40067 23 2.40067L27 1.90067L24.5 4.40067L28 3.90067C28 3.90067 25.9107 5.57912 24.5 6.90067Z" fill="#1D9BF0" stroke="#1D9BF0" strokeLinejoin="round"/>
        </svg>

    );
}

export const BookmarkIcon = () => {
    return (
        <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5002 1.5H3.50025C2.00025 1.5 1.50025 2.5 1.50025 3.5V24L10.0002 16L18.0002 24V3C18.0002 2.5 17.5002 1.5 16.5002 1.5Z" stroke="#1C1C1C" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
    );
}

export const MailIcon = () => {
    return (
        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00004 6.5C1.00003 5.67999 1.00002 4.8489 1 4.00002C1 2.5 2.00024 1.00002 4 1.00002C8.50024 0.999966 14.5002 1.00004 19 1.00002C21.2637 1.00001 22 2.27773 22 4.00002C22 4.83441 22 5.6688 22 6.5M1.00004 6.5C1.00008 10.0269 1.00005 13.3489 1 17C0.999971 19 2.50024 20 4 20C10.0002 20 14.0002 20 19 20C21.0002 20 22 18.5 22 17C22 13.7417 22 10.1516 22 6.5M1.00004 6.5L11.5002 12L22 6.5" stroke="#1C1C1C" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
    );
}

export const BellIcon = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 16.5C6.5 16.5 3.00003 16.5 1.5 16.5C4 15.5 2 0.999981 11 1C20 1.00002 18 15.5 20.5 16.5C18 16.5 15.5 16.5 15.5 16.5M6.5 16.5C6.5 16.5 7 21 11 21C14.8039 21 15.5 16.5 15.5 16.5M6.5 16.5H15.5" stroke="#1C1C1C" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
    );
}

export const UserIcon = () => {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 20.5079H1C1 20.5079 3 11.5078 10 11.5078C16.5 11.5078 18.5 20.5079 18.5 20.5079Z" stroke="#1C1C1C" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M13.5 5.00785C13.5 7.21699 11.7042 9.1548 9.5 9.00785C7.42893 8.86978 6 7.08352 6 5.00785C6 2.93219 7.42893 1.14592 9.5 1.00785C11.7042 0.860901 13.5 2.79871 13.5 5.00785Z" stroke="#1C1C1C" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
    );
}

export const HomeIcon = () => {
    return (
        <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 22.5H6C4.5 22.5 3.5 21.5 3.5 19.5V10H1L13.5 1L25.5 10H23.5V19.5C23.5 21.5 22.6625 22.5 20.5 22.5Z" fill="black" stroke="black" strokeLinejoin="round"/>
            <path d="M17 14C17 16.2091 15.2091 18 13 18C10.7909 18 9 16.2091 9 14C9 11.7909 10.7909 10 13 10C15.2091 10 17 11.7909 17 14Z" fill="#F8F8F8" stroke="#F8F8F8" strokeLinejoin="round"/>
        </svg>
    );
}

export const SearchIcon = ({stroke, strokeWidth}) => {
    return ( 
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0529 17.1652C19.5432 15.5548 20.4516 13.415 20.4516 11.0667C20.4516 6.05931 16.3211 2 11.2258 2C6.13054 2 2 6.05931 2 11.0667C2 16.0742 6.13054 20.1335 11.2258 20.1335C13.9316 20.1335 16.3653 18.9887 18.0529 17.1652ZM18.0529 17.1652L23 22.1123" stroke={stroke || 'var(--carbon)'} strokeWidth={strokeWidth || 3} strokeLinecap="round"/>
        </svg>

    )
}

export const ConfigurationIcon = () =>{
    return(
        <svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.59091" cy="1.59091" r="1.59091" fill="#1C1C1C"/>
            <circle cx="7.5" cy="1.59091" r="1.59091" fill="#1C1C1C"/>
            <circle cx="13.4091" cy="1.59091" r="1.59091" fill="#1C1C1C"/>
        </svg>
    );
}

export const CrossIcon = ({width, height, stroke, strokeWidth}) => {
    return (
        <svg width={width || 29} height={height || 29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.52081 26.5208L26.5208 1.52081M26.5208 26.5208L1.52081 1.52081" stroke={ stroke || "#242424"} strokeWidth={ strokeWidth || 3} strokeLinecap="round"/>
        </svg>
    );
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

export const ArrowLeftIcon = () => {
    return(
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2 17L2 9.5M2 9.5L9.2 2M2 9.5H18" stroke="#222222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}