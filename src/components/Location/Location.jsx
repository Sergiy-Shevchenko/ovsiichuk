import {Map} from '../Map/Map'
import css from './Location.module.css';
import panoram from '../../image/pamoram1.png'

export const Location = () => {
return (
    <div className={css.container}>
        <p className={css.text}>м.Київ, вул.Саксаганського, буд 119 Бізнес центр "Botanic Tower", офіс №13</p>
        <img className={css.img} src={panoram} alt='panoram'/>
    <Map/>
    </div>
)
}