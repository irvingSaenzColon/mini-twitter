import { Link } from "react-router-dom";
import useSession from "../../hooks/useSession";
import Button from "../Button";
import { BellIcon, BookmarkIcon, HomeIcon, SearchIcon, TwitterIcon, UserIcon } from "../../Icons";
import './SideBar.css';

export default function SideBar(){
    const {session, removeSession, session_key} = useSession();

    return(
        <aside className="side-navigation">       
            <ul>
                <li className="side-nav__item side-nav__item--logo"><Link> <TwitterIcon /></Link></li>
                <li className="side-nav__item side-nav__item--active"><Link> <HomeIcon />Home</Link></li>
                <li className="side-nav__item"><Link> <SearchIcon/>Explore</Link></li>
                <li className="side-nav__item"><Link> <BellIcon />Notifications</Link></li>
                <li className="side-nav__item"><Link> <BookmarkIcon />Bookmarks</Link></li>
                <li className="side-nav__item"><Link> <UserIcon />Profile</Link></li>
                <li className="side-nav__item"><Button type={'button'} styleClasses={['button--primary', 'button--full-width']}>Tweet</Button></li>
            </ul>
            <section>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <p>
                        <span>Nombre</span>
                        <span>Nombre</span>
                    </p>
                    <button>...</button>
                </div>

            </section>
        </aside>
    )
}