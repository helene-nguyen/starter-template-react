import { NoPage, Home, About, Contact } from '../Pages';
import { ArticlesRoutes } from './ArticlesRoutes';

const Router = [
  { id: 1, name: 'Home', mainPath: '/', mainElement: <Home /> },
  { id: 2, name: 'NoPage', mainPath: '*', mainElement: <NoPage /> },
  { id: 3, ...ArticlesRoutes },
  { id: 4, name: 'About', mainPath: 'about', mainElement: <About /> },
  { id: 5, name: 'Contact', mainPath: 'contact', mainElement: <Contact /> },
];

export { Router };

