// Component props.
export interface MetadataDateProps {
  date: string;
  time?: string;
}

// Refer to: https://stackoverflow.com/questions/48689876/how-to-convert-timestamp-in-react-js
const formatDate = (dateString: string | number | Date) => {
  const formatDateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  return new Date(dateString).toLocaleDateString(undefined, formatDateOptions);
};

const formatTime = (timeString: string) => {
  const [hr, mm] = timeString.split(':');
  const hour = +hr % 24;
  return (
    ' (' + (hour % 12 || 12) + ':' + mm + (hour < 12 ? ' am' : ' pm') + ')'
  );
};

// Component render.
const MetadataDate = ({ date, time }: MetadataDateProps) => {
  let timeStamp = date;
  let displayDate = formatDate(date);
  let displayTime;

  if (time) {
    displayTime = formatTime(time);
  }

  return (
    <time dateTime={timeStamp}>
      {displayDate}
      {displayTime}
    </time>
  );
};

export default MetadataDate;
