// Component props.
export interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  percentage?: boolean;
}

// Component render.
const Image = ({ src, alt, width, height, percentage }: ImageProps) => {
  let setWidth = width?.toString();
  let setHeight = height?.toString();

  if (percentage) {
    setWidth = '' + setWidth + '%';
    setHeight = '' + setHeight + '%';
  }

  return (
    <img
      src={src}
      alt={alt ? alt : undefined}
      width={setWidth ? setWidth : undefined}
      height={setHeight ? setHeight : undefined}
      loading='lazy'
    />
  );
};

// Component export.
export default Image;
