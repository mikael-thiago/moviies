import React, { useEffect, useState } from "react";

//Functions
import { getMostPopularMovies } from "../../../../api-calls/api-calls";
import { getImageBaseUrl } from "../../../../api_config";

//Components
import Section from "../../components/Section/Section";
import MovieCard from "../../components/MovieCard/MovieCard";

//Styles
import "./principal.css";

const Principal = () => {

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        getMostPopularMovies(1).then((mostPopularMovies) => {
            setMovieData(mostPopularMovies);
        });
    }, []);

    return (
        <div className="principal-wrapper">
            <Section title="Filmes mais populares">
                {movieData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} imageBaseUrl={getImageBaseUrl()} />
                )
                )}
            </Section>

        </div>
    )
}

export default Principal;