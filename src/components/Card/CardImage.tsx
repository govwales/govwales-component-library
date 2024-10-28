import Image from '../Image/Image';

// Component props.
export interface CardImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  percentage?: boolean;
}

// Component render.
const CardImage = ({ src, alt, width, height, percentage }: CardImageProps) => {
  return (
    <div className='gw-card__image'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        percentage={percentage}
      />
    </div>
  );
};

export default CardImage;
