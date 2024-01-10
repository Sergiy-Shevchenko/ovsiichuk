// import img from '../image/tryzub.svg';

// const Head = () => {
//   return (
//     <div className="container">
//       <img src={img} alt='gerb'/>
//       <h3 className="city">КИЇВСЬКИЙ МІСЬКИЙ НОТАРІАЛЬНИЙ ОКРУГ</h3>
//       <h2 className="job">НОТАРІУС</h2>
//       <h1 className="name">ОВСІЙЧУК Ірина Григорівна</h1>
//       <h4 className="testimony">Свідоцтво 9690</h4>
//     </div>
//   )
// }

import { Head } from "./Header/Head";

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
     
    </div>
  );
};
