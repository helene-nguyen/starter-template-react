//~ Imports Components
import { Router } from '../Routes/Routes';
import Layout from '../Layout/Layout';

//~ Import Module
import { Routes, Route } from 'react-router-dom';

//~ Import style
import './App.scss';

const App = () => {

  const mapRouter = Router.map(({id, name, mainPath, mainElement}) => <Route key={id} path={mainPath} element={mainElement} />);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {mapRouter}
      </Route>
    </Routes>
  );
};

export { App };

