import { Map } from '../Map/Map';
import css from './Location.module.css';
import panoram from '../../image/pamoram1.png';


export const Location = () => {

  return (
    <div className={css.container}>
      <p className={css.text}>
        м.Київ, вул. Богдана Хмельницького, буд. 40, офіс №5      
      </p>
      <img className={css.img} src={panoram} alt="panoram" />
      <Map />
    </div>
  );
};
