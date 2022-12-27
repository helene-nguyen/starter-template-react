//& Import
import './Article.scss';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { Spinner } from '../../Components';

const Article = () => {
  let { articleId } = useParams();
  
  //&-------------- Fetch
  const apiURL = `http://localhost:4200/api/v1/posts/${articleId}`;
  // useFetch(apiURL, setArticles, 'GET')
  const [data, isLoading] = useFetch(apiURL, 'GET');

  return (
    <section className="article">
      <h1>Article</h1>
      {!!isLoading ? <Spinner /> : 
        <article>
          <h2>{data.title}</h2>
          
          <p>{ data.content}</p>
          <p>{ data.category}</p>

        </article>
          }
    </section>
  );
};

export default Article;
