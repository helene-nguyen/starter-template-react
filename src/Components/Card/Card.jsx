//& Import modules
import './Card.scss';

const Card = ({ ...data }) => {

  const { title, content, category } = data;

  return (
    <article className="card">
      <header className="card__item card__item__header">{title}</header>
      <section className="card__item card__item__main">
        <p>{content}</p>
      </section>
      <footer className="card__item card__item__footer">{category}</footer>
    </article>
  );
};

export default Card;
