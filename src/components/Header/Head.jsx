import { Contact } from 'components/Contact/Contact';
import img from '../../image/tryzub.svg';
import logo from '../../image/logo-kyiv.png';
import css from './Head.module.css';

const Name = () => {
  return (
    <div className={css.section__name}>
      <h1 className={css.name}>ОВСІЙЧУК </h1>
      <h2 className={css.name}>Ірина Григорівна</h2>
    </div>
  );
};

export const Head = () => {
  return (
    <div className={css.head}>
      <div className={css.container}>
        <img className={css.picture} src={img} alt="gerb" />
        <div className={css.section}>
          <div className={css.title}>
            <h3 className={css.city}>КИЇВСЬКИЙ МІСЬКИЙ НОТАРІАЛЬНИЙ ОКРУГ</h3>
            <h2 className={css.job}>НОТАРІУС</h2>
            <Name />
            <h4 className={css.certificate}>Свідоцтво №9690</h4>
          </div>
          <Contact />
        </div>
        <img className={css.logo} src={logo} alt="logo" />
      </div>
    </div>
  );
};
