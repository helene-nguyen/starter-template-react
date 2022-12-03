//& Import SCSS
import './ThemeBtn.scss';

const ThemeBtn = ({onDarkModeToggle}) => {
  return (
    <section className="button">
        <div className="button__form"  onClick={onDarkModeToggle}></div>
    </section>
  );
};

export default ThemeBtn;

