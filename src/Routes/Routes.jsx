import { NoPage, Home } from '../Pages';
import { ArticlesRoutes } from './ArticlesRoutes';

const Router = [
  { id: 1, name: 'Home', mainPath: '/', mainElement: <Home /> },
  { id: 2, name: 'NoPage', mainPath: '*', mainElement: <NoPage /> },
  { id: 3, ...ArticlesRoutes },
];

export { Router };

