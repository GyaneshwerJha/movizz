import React, { useState } from 'react'
import './nowPlaying.scss'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/swichTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/Carousel/Carousel';

function NowPlaying() {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/now_playing`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Now Playing</span>
                <SwitchTabs data={['Movies']}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>

        </div>
    )
}

export default NowPlaying