import FormPost from "../components/FormPost";
import Header from "../components/Header";
import HeaderButton from "../components/HeaderButton";
import Post from "../components/Post";

export default function Home(){
  
    return(
       <main className="page-content">
        <Header title={'Home'}>
            <HeaderButton value={'For you'} defaultActive={true} />
            <HeaderButton value={'Following'} />
        </Header>
        <FormPost />
        <Post post={{desciption: 'Hola', images: [], id: 0}} />
       </main>
    );
}