import { Icon } from 'components/Svg/Icon';
import picture from '../../image/ovsiichuk.jpg';
import picture_1 from '../../image/4.png'
import css from './Hero.module.css';

const fullServis = [
  { id: 1, name: 'довідка щодо зареєстрованих осіб' },
  { id: 2, name: 'експертна оцінка нерухомості' },
  { id: 3, name: 'технічний паспорт' },
  { id: 4, name:  'витяг з Державного земельного кадастру'},
];

const FullServiseList = ({ id, name }) => {
  return (
    <ul className={css.list}>
      {fullServis.map(({ id, name }) => (
        <li className={css.item} key={id}>
          <p className={css.text__servis}>- {name}</p>
        </li>
      ))}
    </ul>
  );
};

export const Hero = () => {
  return (
    <div className={css.container}>
      <img className={css.img} src={picture} alt="ovsiichuk" />
      <img className={css.img__1} src={picture_1} alt='ovsiichuk'/>
      <div>
<p className={css.text}>
        Консультую та вчиняю всі види нотаріальних дій, відповідно до Закону
        України “Про нотаріат”
      </p>

      <span className={css.real}>
        <Icon className={css.icon__quill} id="icon-quill" />
        <p className={css.title__servis}>
          Оформлення угод з нерухомістю "під ключ":
          <FullServiseList />
        </p>
      </span>

      </div>
      
    </div>
  );
};
