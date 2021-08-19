import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../redux/actions';
import PostsWrapper from './PostsWrapper'

const Posts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        setPosts(dispatch);
    }, [])

    const data = useSelector(state => state.Posts);

    return (
        <PostsWrapper>
            <h2>Posts</h2>
            <div>
                {data.map(v => <div className="shadow rounded d-flex mb-3">
                    <span className="me-3">{v.userId}</span>
                    <p>{v.title}</p>
                </div>)}
            </div>
        </PostsWrapper>
    )
}

export default Posts