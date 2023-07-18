import { useParams } from "react-router-dom"
import Header from "../components/Header"
import HeaderButton from "../components/HeaderButton"
import ProfileCard from "../components/ProfileCard";

export default function Search(){
    const {searched} = useParams();
    
    return(
        <main className="page-content">
            <Header title={''} searchInput={true} returnButton={true}>
                <HeaderButton value={'Top'} defaultActive={true} />
                <HeaderButton value={'Latest'} />
                <HeaderButton value={'People'} />
                <HeaderButton value={'Photos'} />
                <HeaderButton value={'Videos'} />
            </Header>
            <section className="bd-bt">
            <section className="pd-nm">
                <h2 className="subtitle">People</h2>
                <ProfileCard />
            </section>
                <button className="button--pd button-link button--full-width button-text-left">View all</button>
            </section>
            <section>
                {/* This section is gonna take all post order by how many likes does it has */}
            </section>
        </main>
    )
}