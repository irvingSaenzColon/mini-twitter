import FormPost from "../components/FormPost";
import Header from "../components/Header";
import HeaderButton from "../components/HeaderButton";

export default function Home(){
  
    return(
       <main className="page-content">
        <Header title={'Home'}>
            <HeaderButton value={'For you'} defaultActive={true} />
            <HeaderButton value={'Following'} />
        </Header>
        <FormPost />
       </main>
    );
}