import { NoPage, Home, About, Contact } from '../Pages';
import { ArticlesRoutes } from './ArticlesRoutes';
//~ Import Module
import { Route } from 'react-router-dom';

const Router = [
  { id: 1, isNav: true, name: 'Home', mainPath: '/', mainElement: <Home /> },
  { id: 2, isNav: false, name: 'NoPage', mainPath: '*', mainElement: <NoPage /> },
  { id: 3, ...ArticlesRoutes },
  { id: 4, isNav: true, name: 'About', mainPath: 'about', mainElement: <About /> },
  { id: 5, isNav: false, name: 'Contact', mainPath: 'contact', mainElement: <Contact /> },
];

const mainRoutes = Router.map(({ id, mainPath, mainElement }) => <Route key={id} path={mainPath} element={mainElement} />);

// const articleRoutes = Router.map(({ id, articlePath, articleElement }) => <Route key={id} path={articlePath} element={articleElement} />);

// avoid looping on Router
const { articlePath, articleElement } = ArticlesRoutes;
const articleRoutes = <Route path={articlePath} element={articleElement} />;

export { Router, mainRoutes, articleRoutes };
