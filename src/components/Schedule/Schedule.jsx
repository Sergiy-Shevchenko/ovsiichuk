import { Icon } from 'components/Svg/Icon';
import css from './Schedule.module.css';

export const Shedule = () => {
  return (
    <div className={css.container}>
     <h3 className={css.title}><Icon className={css.icon__watch} id="icon-stopwatch" />Мій графік</h3>
    <div className={css.schedule}>
      <Icon className={css.icon__time} id="icon-calendar" />
      <span className={css.sectson}>
        <p className={css.text}>Пн-Пт - 9:00-19:00</p>
        <p className={css.text}>Сб - 9:00-16:00</p>
        <p className={css.text}>Нд - За домовленістю</p>
      </span>
    </div>
    </div>
   
  );
};
