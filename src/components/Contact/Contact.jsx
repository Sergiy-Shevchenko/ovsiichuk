import { Icon } from 'components/Svg/Icon';
import css from './Contact.module.css';
export const Contact = () => {
  return (
    <div className={css.section}>
      <div className={css.contact__phone}>
        <a className={css.link__phone} href="tel:+380976928436">
          <Icon className={css.icon__phone} id="icon-phone" />
          <p className={css.phone}>+380976928436</p>
        </a>
        <a className={css.link__phone} href="tel:+380992460386">
          <Icon className={css.icon__phone} id="icon-phone" />
          <p className={css.phone}>+380992460386</p>
        </a>
      </div>
      <a className={css.link__email} href="mailto:iovsiichuknotar@gmail.com">
        <Icon className={css.icon__email} id="icon-mail" />
        <p className={css.email}>iovsiichuknotar@gmail.com</p>
      </a>
    </div>
  );
};
