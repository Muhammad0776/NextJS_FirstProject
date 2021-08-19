import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlbums } from "../../redux/actions";
import AlbumsWrapper from "./AlbumsWrapper";

const Albums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setAlbums(dispatch);
  }, []);

  const data = useSelector((state) => state.Albums);

  return (
    <AlbumsWrapper>
      <h2>Albums</h2>
      {data.map((v) => (
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-6">
            <div className="card rounded d-flex mb-3">
              <div className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-warning">{v.id}</span>
                <p className="mb-0 text-muted">{v.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </AlbumsWrapper>
  );
};

export default Albums;
