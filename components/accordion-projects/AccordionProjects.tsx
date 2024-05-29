'use client';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { TAccordionProj } from '@/types/accordeon';
import styles from './AccordionProject.module.scss';

interface IAccordeonProps {
  data: TAccordionProj[];
};

const AccordionProjects: React.FC<IAccordeonProps> = ({ data }) => {
  const [checked, setChecked] = useState('900');
  const [accordionHeight, setAccordionHeight] = useState(690);

  const targetRef = useRef(null);

  const setInputChecked = (e: string) => {
    setChecked(e);
  };

  useEffect(() => {
    window.addEventListener('resize', () =>
      targetRef.current &&
      setAccordionHeight(targetRef.current['offsetHeight'])
    );

    if (targetRef.current !== null) {
      setAccordionHeight(targetRef.current['offsetHeight'])
    }
  }, []);

  return (
    <div className={ styles.accordion }>
      {
        data.map((el, index) => {
          return (
            <div key={ el.title }>
              <input id={ index.toString() }
                className={ styles.accordion__checkbox }
                name="accordion-1"
                type="checkbox"
                onChange={ (e) =>
                  +checked === el.num ?
                    setInputChecked('900') :
                    setInputChecked(e.target.id)
                }
              />
              <label htmlFor={ index.toString() }
                className={ styles.accordion__header }
              >
                <p className={ styles.accordion__title }>
                  { el.title }
                </p>
                <p className={ styles.accordion__header_btn }>
                  +
                </p>
              </label>
              <article style={
                +checked === el.num ?
                  {
                    height: accordionHeight + 30
                  } :
                  { height: 0 }
              }
                className={ styles.accordion__content }
              >
                <div ref={ targetRef }>
                  {
                    el.descr.map(elem => {
                      return (
                        <p key={ elem }
                          className={ styles.accordion__content_item }
                        >
                          { elem }
                        </p>
                      )
                    })
                  }
                  <div className={ styles.accordion__btns }>
                    <button className={ styles.accordion__btns_item }
                      onClick={ (e) => {
                        e.preventDefault();
                        window.location.href = `${ el.deployLink }`;
                      } }
                    >
                      Приложение
                    </button>
                    <button className={ styles.accordion__btns_item }
                      onClick={ (e) => {
                        e.preventDefault();
                        window.location.href = `${ el.gitHubLink }`;
                      } }
                    >
                      Исходники
                    </button>
                  </div>
                </div>
              </article>
            </div>
          )
        })
      }
    </div>
  )
};

export { AccordionProjects };