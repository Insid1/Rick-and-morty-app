import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '@/components/pages/error/error';
import CharacterPage from '@/components/pages/character/character';
import EpisodePage from '@/components/pages/episode/episode';
import LocationPage from '@/components/pages/location/location';
import MainPage from '@/components/pages/main/main';
import AppRoutes from './app-routes';

function Router() {
  return (
    <Routes>
      <Route
        path={AppRoutes.Main}
        element={<MainPage />}
      />
      <Route
        path={`${AppRoutes.Character}:id`}
        element={<CharacterPage />}
      />
      <Route
        path={`${AppRoutes.Episode}:id`}
        element={<EpisodePage />}
      />
      <Route
        path={`${AppRoutes.Location}:id`}
        element={<LocationPage />}
      />
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  );
}

export default Router;
