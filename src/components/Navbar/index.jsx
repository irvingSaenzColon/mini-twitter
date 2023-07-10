import { Link } from "react-router-dom";
import useSession from "../../hooks/useSession";
import { ArrowDownIcon, SaturnIcon } from "../../Icons";
import './Navbar.css';

export default function Navbar(){
    const {session} = useSession();

    return(
        <nav className="navbar">       
            <Link>
                <SaturnIcon width={68} height={35} />
                
            </Link>
            <ul className="navbar__right">
                <li>

                </li>
                <li className="navbar__profile">
                    {
                        session ? 
                        (
                        <div>
                            {
                                session.profileImage ?
                                <img src={session.profileImage} alt="" srcSet="" />
                                :
                                (
                                    <div style={{display:'flex', alignItems:'center', justifyContent:'center', width: "35px", height:"35px", borderRadius:'50%', fontSize: '2.4rem', fontWeight:'700',backgroundColor:'var(--blue-green)'}}>
                                        <p>{session?.nickname[0].toUpperCase()}</p>
                                    </div>
                                )
                            }
                            <ArrowDownIcon width={10} height={20} stroke={'var(--dark-prince)'} fill={'var(--dark-prince)'} strokeWidth={4} />
                            <ul>
                                <li>Profile</li>
                                <li>Sign out</li>
                            </ul>
                        </div>
                        )
                        :
                        (
                            <>
                            <Link to={'/sign-in'}>Sign in</Link>
                            <Link to={'sign-up'}>Sign up</Link>
                            </>
                        )
                    }
                </li>
            </ul>
        </nav>
    )
}