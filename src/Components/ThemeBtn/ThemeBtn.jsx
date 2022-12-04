//& Import SCSS
import './ThemeBtn.scss';

const ThemeBtn = ({handleToggleMode}) => {
  return (
    <section className="button">
        <div className="button__form"  onClick={handleToggleMode}></div>
    </section>
  );
};

export default ThemeBtn;

