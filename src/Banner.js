import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //   console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/** Create a header background Image */}
        {/** title to show in header */}

        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/** create a div and inside create a 2 buttons */}

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">WishList</button>
        </div>

        {/** Description */}

        <h1 className="banner_description">
          {/* {movie?.overview} */}
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
