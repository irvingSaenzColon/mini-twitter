import FormPost from "../components/FormPost";
import Header from "../components/Header";
import HeaderButton from "../components/HeaderButton";
import Post from "../components/Post";
import { posts } from "../mocks/postMocks";

export default function Home(){
  
    return(
       <main className="page-content">
        <Header title={'Home'}>
            <HeaderButton value={'For you'} defaultActive={true} />
            <HeaderButton value={'Following'} />
        </Header>
        <FormPost />
        {
            posts.map((post, index) => (<Post key={index} post={post} />))
        }
       </main>
    );
}