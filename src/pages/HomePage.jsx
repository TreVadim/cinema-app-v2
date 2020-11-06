import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Input, Select } from "antd";

import { MoviePreview } from "../components/MoviePreview";

const { Option } = Select;

const HomePage = ({ movies }) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [searchValue, setSearchValue] = useState('');
    const [chosenGenre, setChosenGenre] = useState('');
    const genres = useRef(movies.reduce((acc, item) => {
        if (item.genre && item.genre.length) {
            item.genre.forEach((elem) => {
                const value = elem.trim();
                if (value) {
                    if (acc.includes(value)) {
                        return acc;
                    } else {
                        return acc.push(value);
                    }
                }
            });
        }

        return acc;
    }, []));

    const handleChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };

    const handleSelectChange = (value) => {
        setChosenGenre(value);
    }

    const handleSelectClear = () => {
        setChosenGenre('');
    }

    useEffect(() => {
        if (searchValue && !chosenGenre) {
            const result = movies.filter(
                (item) => item.title.toLowerCase().includes(searchValue)
            );
            setFilteredMovies(result);
        } else if (!searchValue && chosenGenre) {
            const result = movies.filter(
                (item) => {
                    return item.genre && item.genre.some(
                        (elem) => {
                            return elem && elem.trim() === chosenGenre;
                        }
                    );
                }
            );
            setFilteredMovies(result);
        } else if (searchValue && chosenGenre) {
            const result = movies.filter(
                (item) => {
                    const includesTitle = item.title.toLowerCase().includes(searchValue);
                    const includesGenre = item.genre && item.genre.some((elem) => {
                        return elem && elem.trim() === chosenGenre;
                    });

                    return includesTitle && includesGenre;
                }
            );

            setFilteredMovies(result);
        } else {
            setFilteredMovies(movies);
        }
    }, [searchValue, chosenGenre]);

    return (
        <>
            <div className='filter'>
                <Input
                    placeholder='Search movie...'
                    onChange={handleChange}
                />
                <Select
                    onChange={handleSelectChange}
                    allowClear
                    onClear={handleSelectClear}
                >
                    {genres.current.map((item) => (
                        <Option key={item} value={item}>{item}</Option>
                    ))}
                </Select>
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
    movies: state.moviesData.movies
});

export default connect(mapStateToProps)(HomePage);
