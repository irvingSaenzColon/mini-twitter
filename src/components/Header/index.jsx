import { ArrowLeftIcon } from '../../Icons';
import SearchBar from '../SearchBar';
import './Header.css';

export default function Header({children, title, returnButton = false, searchInput = false}){

    return(
        <header className='header'>
            
            <section className='header--margin'>
                <section className='header__title-section'>
                    {
                        returnButton &&
                        <button className='header__backwards'>
                            <ArrowLeftIcon />
                        </button>
                    }
                    <h1 className='header__title'>{title}</h1>
                </section>
                { searchInput && <SearchBar /> }
            </section>
            <section className='header__buttons'>
                {children}
            </section>
        </header>
    );
} 