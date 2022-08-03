import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharacterPage from '../components/pages/character/character';
import EpisodePage from '../components/pages/episode/episode';
import ErrorPage from '../components/pages/error/error';
import LocationPage from '../components/pages/location/location';
import MainPage from '../components/pages/main/main';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      <Route path="/episode/:id" element={<EpisodePage />} />
      <Route path="/location/:id" element={<LocationPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
