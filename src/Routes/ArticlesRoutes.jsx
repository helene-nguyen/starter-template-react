import { Articles, Article } from '../Pages';

export const ArticlesRoutes = {
  name: 'Articles',
  isNav: true,
  // main
  mainPath: 'articles',
  mainElement: <Articles />,
  // params
  articlePath: 'articles/:articleId',
  articleElement: <Article />,
};
