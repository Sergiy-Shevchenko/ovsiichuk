import React from 'react';
import { Icon } from 'components/Svg/Icon';
import css from './Map.module.css';

export const Map = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>
        <Icon className={css.icon__poit} id="icon-point" />
        Google map
      </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.7047706570133!2d30.509403419811594!3d50.446599540073585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce58877438fb%3A0x831fb718c666490b!2z0LLRg9C70LjRhtGPINCR0L7Qs9C00LDQvdCwINCl0LzQtdC70YzQvdC40YbRjNC60L7Qs9C-LCA0MCwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1708871713129!5m2!1suk!2sua" 
      width="600" 
      height="450"  
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      title="Google map"></iframe>
    </div>
  );
};
