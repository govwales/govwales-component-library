// Component props.
export interface CardDescriptionProps {
  description: string;
}

// Component render.
const CardDescription = ({ description }: CardDescriptionProps) => {
  return <div className='gw-card__description'>{description}</div>;
};

export default CardDescription;
