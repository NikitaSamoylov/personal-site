'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactsForm.module.scss';
import ym from 'react-yandex-metrika';

type TInputs = {
  name: string;
  email: string;
  company: string;
  msg: string;
}

const ContactsForm: React.FC = () => {
  const [btnMsg, setBtnMsg] = useState('Отправить');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TInputs>({
    mode: 'onBlur'
  });

  const onSubmit = async (data: TInputs) => {
    setBtnMsg('Отправляется');

    try {
      const resp = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!resp.ok) {
        throw new Error('Ошибка отправки сообщения')
      };

      reset();
      setBtnMsg('Отправлено')
    } catch (e) {
      setBtnMsg('Ошибка отправки')
    };

    ym('97598670', 'reachGoal', 'TARGET_NAME');
    return true;
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }
      className={ styles.form }
    >
      <div className={ styles.form__element }>
        <input type="text"
          placeholder="ваше имя"
          id='name'
          className={ styles.form__item }
          {
          ...register("name", {
            required: 'заполните поле',
            minLength: {
              value: 2,
              message: 'минимум 2 символа'
            },
          })
          }
        />
        {
          errors.name ?
            (
              <span className={ styles.form__item_notice }>
                { errors.name.message }
              </span>
            ) :
            null
        }
      </div>

      <div className={ styles.form__element }>
        <input type="text"
          placeholder="ваш email"
          id='email'
          className={ styles.form__item }
          {
          ...register("email", {
            required: 'заполните поле',
            minLength: {
              value: 2,
              message: 'минимум 2 символа'
            },
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          })
          }
        />
        {
          errors.email ?
            (
              <span className={ styles.form__item_notice }>
                { errors.email.message }
              </span>
            ) :
            null
        }
      </div>

      <div className={ styles.form__element }>
        <input type="text"
          placeholder="компания"
          id='company'
          className={ styles.form__item }
          {
          ...register("company", {
          })
          }
        />
      </div>

      <div className={ styles.form__element }>
        <textarea rows={ 1 }
          style={ { resize: 'vertical', maxHeight: 200 } }
          placeholder="сообщение"
          id='msg'
          className={ styles.form__item }
          {
          ...register("msg", {
            required: 'заполните поле',
            minLength: {
              value: 2,
              message: 'минимум 10 символов'
            },
          })
          }
        />
        {
          errors.msg ?
            (
              <span className={ styles.form__item_notice }>
                { errors.msg.message }
              </span>
            ) :
            null
        }
      </div>
      <button type='submit'
        className={ !isValid ?
          `${ styles.form__btn }
          ${ styles.form__btn_disabled }` :
          styles.form__btn
        }
        disabled={ isValid ? false : true }
      >
        { btnMsg }
      </button>
    </form>
  )
};

export { ContactsForm };
