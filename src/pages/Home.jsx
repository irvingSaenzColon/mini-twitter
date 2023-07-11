import Header from "../components/Header";
import HeaderButton from "../components/HeaderButton";

export default function Home(){
  
    return(
       <main className="page-content">
        <Header title={'Home'}>
            <HeaderButton value={'For you'} />
        </Header>
       </main>
    );
}