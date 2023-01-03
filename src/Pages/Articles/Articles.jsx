//& Import modules
import './Articles.scss';
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { Spinner } from '../../Components';
import {Card} from '../../Components/index';

const Articles = () => {
  //&-------------- Fetch
  const apiURL = 'http://localhost:4200/api/v1/posts';
  // useFetch(apiURL, setArticles, 'GET')
  const [data, isLoading] = useFetch(apiURL, 'GET');

  return (
    <section className="articles">
      <div className="card__board">
        {!!isLoading ? <Spinner /> : data.map(({ id, ...elem }) =>
          <Link className="card" key={id} to={`/articles/${id}`}>
            <Card {...elem} />
          </Link>
          )}
      </div>
    </section>
  );
};

export default Articles;
