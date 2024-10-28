import MetadataDate from './MetadataDate';

// Component SCSS.
import './Metadata.scss';

// Component props.
export interface MetadataProps {
  label?: string;
  type?: string;
  date?: string;
  time?: string;
}

// Component render.
const Metadata = ({
  label = 'Metadata label',
  type,
  date,
  time,
}: MetadataProps) => {
  let cssClass;

  if (type === 'Type') {
    cssClass = 'gw-metadata gw-metadata--type';
  } else if (type === 'Status') {
    cssClass = 'gw-metadata gw-metadata--status';
  } else if (type === 'Topic') {
    cssClass = 'gw-metadata gw-metadata--topic';
  } else if (type === 'Organisation') {
    cssClass = 'gw-metadata gw-metadata--organisation';
  } else {
    cssClass = 'gw-metadata';
  }

  let markup;
  markup = <div className={cssClass}>{label}</div>;

  if (date) {
    cssClass = 'gw-metadata gw-metadata--date';
    let dateObject = Date.parse(date);

    if (!isNaN(dateObject)) {
      cssClass = 'gw-metadata gw-metadata--date';

      markup = (
        <div className={cssClass}>
          <MetadataDate date={date} time={time} />
        </div>
      );
    }
  }

  return <>{markup}</>;
};

// Component export.
export default Metadata;
