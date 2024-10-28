import { CallOut } from '../CallOut';

// Component props.
export interface CardCallOutProps {
  text: string;
  type?: string;
  size?: string;
}

// Component render.
const CardCallOut = ({ text, type, size = 'sm' }: CardCallOutProps) => {
  return (
    <div className='gw-card__callout'>
      <CallOut text={text} type={type} size={size} />
    </div>
  );
};

export default CardCallOut;
