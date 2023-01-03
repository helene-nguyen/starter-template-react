//~ Imports Components
import { Router, mainRoutes, articleRoutes } from '../Routes/Routes';
import Layout from '../Layout/Layout';

//~ Import Module
import { Routes, Route } from 'react-router-dom';

//~ Import style
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout pages={Router} />}>
        {mainRoutes}
        {articleRoutes}
      </Route>
    </Routes>
  );
};

export { App };
