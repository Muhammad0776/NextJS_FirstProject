import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPhotos } from '../../redux/actions';
import PhotosWrapper from './PhotosWrapper'

const Photos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        setPhotos(dispatch);
    }, [])

    const data = useSelector(state => state.Photos);

    return (
        <PhotosWrapper>
            <h2>Photos</h2>
            {data.map(v => <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-6">
                    <div className="card rounded mb-4">
                        <img src={v.thumbnailUrl} alt="not photo" />
                        <div className="d-flex">
                            <span>{v.albumId}.</span>
                            <p>{v.id}</p>
                            <p>{v.title}</p>
                        </div>
                    </div>
                </div>
            </div>)}
        </PhotosWrapper>
    )
}

export default Photos