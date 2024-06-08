import React from 'react';
import { ContactsForm } from '@/components/contacts-form';
import styles from './Contacts.module.scss';

const contactsData = [
  { title: 'Discord', value: 'nikitasamoylov0942' },
  { title: 'Github', value: 'nikitasamoylov' },
  { title: 'Email', value: 'nsam7655@gmail.com' },
  { title: 'Telegram', value: '@MkxMark2' },
  { title: 'Skype', value: 'nsam7655@gmail.com' },
];

const Contacts: React.FC = () => {

  return (
    <div className={ styles.contacts }>
      <h1 className={ styles.contacts__title }>
        Контакты
      </h1>
      <div className={ styles.contacts__content }>
        <div className={ styles.contacts__info }>
          <ul className={ styles.contacts__links }>
            {
              contactsData.map(el => (
                <li className={
                  `${ styles.contacts__item }
                  ${ styles.contacts__item_title }`
                }
                  key={ el.title }
                >
                  { el.title }
                </li>
              ))
            }
          </ul>
          <ul className={ styles.contacts__links }>
            {
              contactsData.map(el => (
                <li className={ styles.contacts__item }
                  key={ el.value }
                >
                  { el.value }
                </li>
              ))
            }
          </ul>
        </div>
        <ContactsForm />
      </div>
    </div>
  )
};

export { Contacts };