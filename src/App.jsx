import { PageNotFound, Details, Explore, Home, SearchResult } from './pages';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { useEffect, useState } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TermsOfUse from './components/termsOfUse/TermsOfUse';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApi();
    genreCall();
  }, []);

  const fetchApi = () => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url))
    });
  };

  const genreCall = async () => {
    let promises = []
    let endpoint = ['tv', 'movie']
    let allGenres = {}

    endpoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })

    dispatch(getGenres(allGenres));

  }


  return <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path="/:mediaType/:id" element={<Details />} />
      <Route exact path="/search/:query" element={<SearchResult />} />
      <Route exact path="/explore/:mediaType" element={<Explore />} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;
