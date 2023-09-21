import React, { useState } from 'react'
import './upComing.scss'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/swichTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/Carousel/Carousel';

function UpComing() {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/upcoming`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Up Coming</span>
                <SwitchTabs data={['Movies']} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint = {endpoint}/>

        </div>
    )
}

export default UpComing