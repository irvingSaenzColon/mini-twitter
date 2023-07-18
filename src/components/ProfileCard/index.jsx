import { Link } from "react-router-dom";
import sample from '../../assets/profile.webp';
import './ProfileCard.css';

export default function ProfileCard(){
    return(
        <Link to={'/profile'} className="profile-card">
            <section className="profile-card__header">
                <section className="profile-card__meta">
                    <img className="profile-card__img" src={sample} alt="" />
                    <p>
                        <span>name</span>
                        <span>@nickname</span>
                    </p>
                </section>
                <button className="button button--carbon">Follow</button>
            </section>
            <p className="profile-card__decription">
            Rector @collegeofeurope & Director @EUDiploAcademy. Previously #EU High Rep. for Foreign & Security Policy/Vice-Pres of Commission, & #Italy Foreign Minister
            </p>
        </Link>
    )
}