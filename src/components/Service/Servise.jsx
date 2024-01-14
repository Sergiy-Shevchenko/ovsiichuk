import { Icon } from 'components/Svg/Icon';
import css from './Service.module.css';

const servises = [
  { id: 1, name: 'Реєстр пошкодженого та знищеного майна' },
  { id: 2, name: 'Укладання договорів' },
  {
    id: 3,
    name: 'Державна реєстрація юридичних осіб та фізичних осіб-підприємців',
  },
  { id: 4, name: 'Оформлення довіреностей' },
  { id: 5, name: 'Оформлення заяв' },
  { id: 6, name: 'Апостиль' },
  { id: 7, name: 'Переклади' },
  { id: 8, name: 'Формування витягів з державних реєстрів' },
  { id: 9, name: 'Оформлення спадщини' },
  { id: 10, name: 'Завірення копій' },
];

const ServiseList = ({ servis }) => {
  return (
    <ul className={css.list}>
      {servises.map(servis => (
        <li className={css.item} key={servis.id}>
          <Icon className={css.icon__quill} id="icon-quill" />
          <p className={css.text}>{servis.name}</p>
        </li>
      ))}
    </ul>
  );
};

export const Servise = ({ data }) => {
  return (
    <div className={css.container}>
      <ServiseList servises={servises} />
    </div>
  );
};
