import React, { useRef } from "react";
import { connect } from "react-redux";

const MoviePage = ({ movies, match }) => {
    const movie = useRef(movies.find(({ _id }) => _id === match.params.id));
    console.log("movie", movie);
    return (
        <h3>MoviePage</h3>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movies
});

export default connect(mapStateToProps)(MoviePage);
