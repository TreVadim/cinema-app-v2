import React, { useRef } from "react";
import { connect } from "react-redux";

import InfoBlock from "../components/InfoBlock";

const getValueFromArray = (arr) => (
    arr[arr.length-1]
        ? arr.join(", ")
        : arr.join(", ").slice(0, -2)
);

const MoviePage = ({ movies, match }) => {
    const movie = useRef(movies.find(({ _id }) => _id === match.params.id));
    console.log("movie", movie);
    return (
        <div className="movie-page">
            <h1>{movie.current.title}</h1>
            <div className="movie-info">
                <div>
                    <img src={movie.current.poster} alt=""/>
                    <button className="btn-buy">Buy ticket</button>
                </div>
                <div>
                    <InfoBlock
                        label="Actors:"
                        content={
                            movie.current.actors
                                ? getValueFromArray(movie.current.actors)
                                : "No info"
                        }
                    />
                    <InfoBlock
                        label="Genre:"
                        content={
                            movie.current.genre
                                ? getValueFromArray(movie.current.genre)
                                : "No info"
                        }
                    />
                    <InfoBlock
                        label="Country:"
                        content={
                            movie.current.country
                                ? getValueFromArray(movie.current.country)
                                : "No info"
                        }
                    />
                    <InfoBlock
                        label="Language:"
                        content={movie.current.language || "No info"}
                    />
                    <InfoBlock
                        label="Age:"
                        content={
                            movie.current.age
                                ? `${movie.current.age}+`
                                : "No info"
                        }
                    />
                    <InfoBlock
                        label="Description:"
                        content={movie.current.description || "No info"}
                    />
                    <InfoBlock
                        label="Trailer:"
                        content={
                            <iframe
                                width="100%"
                                height="400px"
                                src={movie.current.trailer}
                                allowFullScreen
                            />
                        }
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    movies: state.moviesData.movies
});

export default connect(mapStateToProps)(MoviePage);
