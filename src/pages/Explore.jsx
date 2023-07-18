import Header from "../components/Header"
import HeaderButton from "../components/HeaderButton"
import Tag from "../components/Tag"

export default function Explore(){
    return(
        <main className="page-content">
            <Header title={''} searchInput={true}>
                <HeaderButton value={'For you'} defaultActive={true} />
                <HeaderButton value={'News'} />
                <HeaderButton value={'Anime'} />
                <HeaderButton value={'Manga'} />
                <HeaderButton value={'Art'} />
            </Header>
            <section>
                <Tag tag={{category: 'Sports', title: 'Televisa', tweets: 1500}} />
            </section>
        </main>
    )
}