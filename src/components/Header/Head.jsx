import { Contact } from 'components/Contact/Contact';
import img from '../../image/tryzub.svg';
import css from './Head.module.css';

export const Head = () => {
  return (
    <div className={css.container}>
      <img className={css.picture} src={img} alt="gerb" />
      <h3 className={css.city}>КИЇВСЬКИЙ МІСЬКИЙ НОТАРІАЛЬНИЙ ОКРУГ</h3>
      <h2 className={css.job}>НОТАРІУС</h2>
      <h1 className={css.name}>ОВСІЙЧУК Ірина Григорівна</h1>
      <h4 className={css.certificate}>Свідоцтво 9690</h4>
      <Contact/>
    </div>
  );
};
