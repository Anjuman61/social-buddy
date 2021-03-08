import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    console.log(comments)

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setPost(data));
    },[id])
    useEffect(()=>{
       const url = `https://jsonplaceholder.typicode.com/comments?id=${id}`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setComments(data))
     },[id])

    return (
        <div>
            <h3>This is post detail: {id}</h3>
            <p>User posted:{post.id} </p>
            <p>Title: {post.title}</p>
            <p>Post body: {post.body}</p>
            
            {
               comments.map(comment=><Comment comment={comment}></Comment>)
            }

        </div>
    );
};

export default PostDetail;