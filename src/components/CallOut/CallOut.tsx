// Component SCSS.
import './CallOut.scss';

// Component props.
export interface CallOutProps {
  text: string;
  type?: string;
  size?: string;
}

// Component render.
const CallOut = ({ text, type, size }: CallOutProps) => {
  let classes;
  classes = 'gw-callout';

  if (type === 'warning') {
    classes = classes + ' gw-callout--warning';
  } else if (type === 'alert') {
    classes = classes + ' gw-callout--alert';
  } else if (type === 'positive') {
    classes = classes + ' gw-callout--positive';
  }

  if (size === 'sm') {
    classes = classes + ' gw-callout--sm';
  }

  return <div className={classes}>{text}</div>;
};

export default CallOut;
