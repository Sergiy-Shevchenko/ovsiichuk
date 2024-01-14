import React from "react"
// import GoogleMapReact from "google-map-react"

import { Icon } from "components/Svg/Icon"
import css from './Map.module.css'



export const Map = () => {
    

    return (
        <div className={css.container}>
        <p className={css.title}><Icon className={css.icon__poit} id="icon-point" />Google map</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510.8504907055224!2d30.49695705026408!3d50.44226437625602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef3ddbfa885%3A0x50cdec50fada8cbc!2z0JHQntCi0JDQndCG0Jog0KLQkNCj0JXQoNCXINCR0IbQl9Cd0JXQoS3QptCV0J3QotCg!5e0!3m2!1suk!2sua!4v1705243304147!5m2!1suk!2sua" 
        width="600" 
        height="450" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google map">
        
        </iframe></div>
    )
}




// const AnyReactComponent = ({text}) => <div>{text}</div>

// export const Map = () => {
//     const defaultProps = {
//         center: {
//             lat: 50.4421,
//             lng: 30.4983
//         },
//         zoom: 11
//     }

//     return (
//         <div className={css.container}>
//            <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="Point"
//         />
//       </GoogleMapReact>
//         </div>
//     )
// }