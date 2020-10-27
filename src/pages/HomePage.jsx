import React, { useState } from "react";
import { connect } from "react-redux";
import { Input } from "antd";

import { MoviePreview } from "../components/MoviePreview";

const { Search } = Input;

const HomePage = ({ movies }) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    const handleSearch = (val) => {
        setFilteredMovies(filteredMovies.filter((item) => item.title.includes(val)))
    };

    return (
        <>
            <div className='filter'>
                <Search
                    placeholder='Search movie...'
                    enterButton
                    onSearch={handleSearch}
                />
            </div>
            <div className='movie-list'>
                {
                    filteredMovies.map((item) => (
                        <MoviePreview key={item._id} movie={item}/>
                    ))
                }
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    movies: state.movies
});

export default connect(mapStateToProps)(HomePage);
