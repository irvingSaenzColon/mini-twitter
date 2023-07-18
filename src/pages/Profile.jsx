import { CalendarIcon } from '../Icons';
import './Profile.css'

export default function Profile(){
    return(
        <main className='page-content'>
        <header className='header-profile'>
            <section>
                <img className='header-profile__cover' src="" alt="" />
            </section>
           <section className='header-profile__data'>
                <section className='flex flex--between flex--align-start mr-bt'>
                        <img className='header-profile__profile' src="" alt="" />
                        <button className='button'>Edit Profile</button>
                </section>
                <section>
                    <p className='header-profile__name'>User name</p>
                    <p className='header-profile__nickname mr-bt'>@nickname</p>
                    <p className='header-profile__nickname'><CalendarIcon /> joined July 2023</p>
                    <section className=' flex flex--gap-md header-profile__nickname'>
                        <p><span>5</span>Following</p>
                        <p><span>1</span>Follower</p>
                    </section>
                </section>
           </section>
        </header>
        <dialog>

        </dialog>
        </main>
    );
}