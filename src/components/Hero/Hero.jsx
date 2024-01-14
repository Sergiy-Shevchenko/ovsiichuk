import picture from '../../image/ovsiichuk.jpg'
import css from './Hero.module.css'

export const Hero = () => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Прості рішення складних завдань!</h2>
            <img className={css.img} src={picture} alt='ovsiichuk'/>
            <p className={css.text}>Консультую та вчиняю всі види нотаріальних дій, відповідно до Закону України “Про нотаріат та нотаріальну діяльність”</p>
        </div>
    )
}