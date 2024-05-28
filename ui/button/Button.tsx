import styles from './Button.module.scss';

interface IButton {
  title: string;
  width: string;
};

const Button: React.FC<IButton> = (
  { title, width }
) => {

  return (
    <button className={ styles.btn }
      style={ { width: width } }
    >
      { title }
    </button>
  )
};

export { Button };