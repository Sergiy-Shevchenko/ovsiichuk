
import { Hero } from "components/Hero/Hero";
import { Servise } from "components/Service/Servise";
import { Location } from "components/Location/Location";
import { Shedule } from "components/Schedule/Schedule";


import css from './Main.module.css'
import { Head } from "components/Header/Head";
export const Main = () => {
    return (
        <div className={css.container}>
            <div className={css.bg_ios_back}>
                <Head/>
<Hero/>
           <Servise/>
           <Location/>
           <Shedule/> 

            </div>
           
        </div>
    )
}