import Post from  './Post';
import NewPost from './NewPost';

function PostList(){
    return( 
    <>
        <NewPost />
        <ul>
        <Post author="db" mat="dbjhfj lfdf"/>
        <Post author="dc" mat="dbjhfj afdkasjl"/>
        </ul>
    </>
    );
}
export default PostList;