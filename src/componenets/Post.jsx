
import classes from  './posts.module.css';
function Post(props){

    // const chosenName=Math.random()>0.5 ? names[0]:names[1]
    return (
    <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p>{props.mat}</p>
    </li>
    );
}

export default Post;