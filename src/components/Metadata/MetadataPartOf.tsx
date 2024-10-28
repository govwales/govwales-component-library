import MetadataPartOfLink from './MetadataPartOfLink';

// Component props.
export interface MetadataPartOfProps {
  label?: string;
  text?: string;
  url?: string;
}

// Component render.
const MetadataPartOf = ({
  label,
  text = '',
  url = '',
}: MetadataPartOfProps) => {
  return (
    <div className='gw-card__metadata gw-card__metadata--mb'>
      <div className='gw-metadata gw-metadata--part-of'>
        {label}:&nbsp;
        <MetadataPartOfLink url={url} text={text} />
      </div>
    </div>
  );
};

export default MetadataPartOf;
