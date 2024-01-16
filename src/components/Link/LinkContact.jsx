import { Icon } from "components/Svg/Icon";
import css from './Link.module.css'

const linkArray = [
    { id: 1,
      name: 'phone', 
      href: 'tel:+380976928436', 
      iconId: 'icon-linck-phone' 
    },
    { id: 2,
      name: 'telegram',
      href: 'https://t.me/simonova_notary',
      iconId: 'icon-linck-telegram',
    },
    { id: 3,
      name: 'viber',
      href: 'viber://chat?number=%2B380976928436',
      iconId: 'icon-linck-viber',
    },
    { id: 4,
      name: 'whatsapp',
      href: 'https://wa.me/380976928436',
      iconId: 'icon-linck-whatsapp',
    },
    { id: 5,
      name: 'mail',
      href: 'mailto:iovsiichuknotar@gmail.com',
      iconId: 'icon-linck-mail',
    }
]

const Link = ({id, name, href, iconId}) => {
    return (
        <ul className={css.link__list}>
            {linkArray.map(({id, name, href, iconId}) => (
                <li key={id} className={css.link__item}>
                    <a href={href}><Icon className={css.icon} id={iconId}/></a>

                </li>
            ))
            }</ul>
    )
}



export const LinkComtact = () => {
    return (
        <div className={css.contaoner}>
            <Link/>
        </div>
    )
}