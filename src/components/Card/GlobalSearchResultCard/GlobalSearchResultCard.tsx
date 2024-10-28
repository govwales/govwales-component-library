import CardTitle from '../CardTitle';
import CardDescription from '../CardDescription';
import FormatDate from '../../Utils/Date';

// Component SCSS.
import '../Card.scss';

// Component props.
export interface GlobalSearchResultCardProps {
  title: string;
  url: string;
  description: string;
  meta?: string[];
  date?: string;
  displayTime?: boolean;
  displayDay?: boolean;
  locale?: string;
}

// Component render.
const GlobalSearchResultCard = ({
  title = '',
  url,
  description = '',
  date,
  displayTime,
  displayDay,
  meta,
  locale,
}: GlobalSearchResultCardProps) => {
  let cardTitle, cardDescription, formattedDate, metaDisplay;

  cardTitle = <CardTitle title={title} url={url} />;

  if (date && locale) {
    formattedDate = (
      <div className='gw-card__meta'>
        <FormatDate
          date={date}
          displayTime={displayTime}
          displayDay={displayDay}
          locale={locale}
        />
      </div>
    );
  }

  if (description) {
    cardDescription = <CardDescription description={description} />;
  }

  if (meta?.length || formattedDate) {
    metaDisplay = (
      <div className='gw-card__meta-container'>
        {formattedDate}
        {meta?.map((value: string, index: number) => (
          <div
            className='gw-card__meta'
            key={index}
            dangerouslySetInnerHTML={{ __html: value }}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className='gw-card gw-card--index-list'>
      {cardTitle}
      {metaDisplay}
      {cardDescription}
    </div>
  );
};

// Component export.
export default GlobalSearchResultCard;
