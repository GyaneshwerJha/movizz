import React, { useEffect, useState } from 'react'
import './heroBanner.scss'
import { useNavigate } from 'react-router-dom';
import useFetch from "../../../hooks/useFetch";
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome to MovieLand 🍿</span>
                    <span className="subTitle">
                        Your gateway to endless entertainment. Start exploring now!
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={handleKeyUp}
                        />
                        <button onClick={searchQueryHandler} className='btn-grad'>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;