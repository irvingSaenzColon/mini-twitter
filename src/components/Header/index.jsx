import { ArrowLeftIcon } from '../../Icons';
import Search from '../Search';
import './Header.css';

export default function Header({children, title, returnButton = false, searchInput = false}){

    return(
        <header className='header'>
            
            <section className='header__title-section'>
                <button className='header__backwards'>
                    <ArrowLeftIcon />
                </button>
                <h1 className='header__title'>{title}</h1>
            </section>
            <Search />
            <section>
                {children}
            </section>
        </header>
    );
} 