


import { Head } from "./Header/Head";
import { Hero } from "./Hero/Hero";
import { Servise } from "./Service/Servise";
import { Location } from "./Location/Location";
import { Shedule } from "./Schedule/Schedule";


export const App = () => {
  return (
  
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
        <Head/>
        <Hero/>
        <Servise/>
        <Location/>
        <Shedule/>
     
    </div>
  );
};
