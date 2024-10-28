// Component props.
export interface CardTitleProps {
  title: string;
  url?: string;
}

// Component render.
const CardTitle = ({ title, url }: CardTitleProps) => {
  let titleObject;

  if (url) {
    titleObject = (
      <h3>
        <a href={url}>{title}</a>
      </h3>
    );
  } else {
    titleObject = <h3>{title}</h3>;
  }

  return <div className='gw-card__title'>{titleObject}</div>;
};

export default CardTitle;
