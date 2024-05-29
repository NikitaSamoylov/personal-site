'use client';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { TAccordeon } from '@/types/accordeon';
import styles from './Accordeon.module.scss';

interface IAccordeonProps {
  data: TAccordeon[];
};

const Accordeon: React.FC<IAccordeonProps> = ({ data }) => {
  const [checked, setChecked] = useState('900');

  const [size, setSize] = useState(0);

  const targetRef = useRef(null);

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (targetRef.current !== null) {
      setSize(Number(targetRef.current['offsetWidth']));
    };
  }

  const setInputChecked = (e: string) => {
    setChecked(e);
  };
  return (
    <div className={ styles.ac_container }>
      {
        data.map((el, index) => {
          return (
            <div key={ el.title }>
              <input id={ index.toString() }
                name="accordion-1"
                type="checkbox"
                onChange={ (e) =>
                  +checked === el.num ?
                    setInputChecked('900') :
                    setInputChecked(e.target.id)
                }
              />
              <label htmlFor={ index.toString() }>
                <p>
                  { el.title }
                </p>
              </label>
              <article style={
                +checked === el.num ?
                  { height: +size / 1.49 } :
                  { height: 0 }
              }
              >
                <p ref={ targetRef }>{ el.descr }</p>
              </article>
            </div>
          )
        })
      }
    </div>
  )
};

export { Accordeon };