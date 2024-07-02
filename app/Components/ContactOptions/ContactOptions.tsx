import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCodepen, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './ContactOptions.module.css'

interface ContactItemProps {
  href: string,
  icon: IconProp
}

const contactItems: Array<ContactItemProps> = [
  {
    href: 'mailto:aaron.harrison.j@gmail.com',
    icon: faEnvelope
  },
  {
    href: 'https://www.linkedin.com/in/aaronharrison16',
    icon: faLinkedin
  },
  {
    href: 'https://github.com/aaronharrison16',
    icon: faGithub
  },
  {
    href: 'https://codepen.io/AaronHarrison',
    icon: faCodepen
  }
]

export default function ContactOptions ()
{
  return (
    <div className="flex flex-row md:flex-col gap-6">
      {contactItems.map((item, i) => (
        <a className={styles.contactLink} target="_blank" key={i} href={item.href}>
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  )
}