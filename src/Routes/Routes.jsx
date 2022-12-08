import { NoPage, Home, About, Contact } from '../Pages';
import { ArticlesRoutes } from './ArticlesRoutes';

const Router = [
  { id: 1, isNav : true, name: 'Home', mainPath: '/', mainElement: <Home /> },
  { id: 2, isNav : false, name: 'NoPage', mainPath: '*', mainElement: <NoPage /> },
  { id: 3, ...ArticlesRoutes },
  { id: 4, isNav : true, name: 'About', mainPath: 'about', mainElement: <About /> },
  { id: 5, isNav : false, name: 'Contact', mainPath: 'contact', mainElement: <Contact /> },
];

export { Router };

