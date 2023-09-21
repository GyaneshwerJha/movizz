import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './Trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import NowPlaying from './nowPlaying/NowPlaying';
import UpComing from './upComing/UpComing';

export default function Home() {
    return (
        <div>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
            <NowPlaying />
            <UpComing />
        </div >
    )
}
