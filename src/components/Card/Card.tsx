import CardTitle from './CardTitle';
import CardImage from './CardImage';
import CardCallOut from './CardCallOut';
import CardDescription from './CardDescription';
import Metadata from '../Metadata/Metadata';
import MetadataPartOf from '../Metadata/MetadataPartOf';

// Component SCSS.
import './Card.scss';

// Component props.
export interface CardProps {
  title: string;
  url?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imagePercentage?: boolean;
  callOut?: string;
  callOutType?: string;
  metadataDate?: string;
  metadataTime?: string;
  metadataType?: string;
  metadataStatus?: string;
  metadataTopic?: string;
  metadataOrganisation?: string;
  metadataPartOfText?: string;
  metadataPartOfUrl?: string;
  metadataPartOfLabel?: string;
}

// Component render.
const Card = ({
  title = '',
  url,
  description = '',
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imagePercentage,
  callOut,
  callOutType,
  metadataDate,
  metadataTime,
  metadataType,
  metadataStatus,
  metadataTopic,
  metadataOrganisation,
  metadataPartOfUrl,
  metadataPartOfText,
  metadataPartOfLabel,
}: CardProps) => {
  let cardImage,
    cardTitle,
    cardDescription,
    cardCallOut,
    cardMetadata,
    cardMetadataDate,
    cardMetadataType,
    cardMetadataStatus,
    cardMetadataTopic,
    cardMetadataOrganisation,
    cardMetadataPartOf;

  if (url) {
    cardTitle = <CardTitle title={title} url={url} />;
  } else {
    cardTitle = <CardTitle title={title} />;
  }

  if (imageSrc) {
    cardImage = (
      <CardImage
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        percentage={imagePercentage}
      />
    );
  }

  if (callOut) {
    cardCallOut = <CardCallOut text={callOut} type={callOutType} />;
  }

  if (metadataDate) {
    cardMetadata = true;
    cardMetadataDate = <Metadata date={metadataDate} time={metadataTime} />;
  }

  if (metadataType) {
    cardMetadata = true;
    cardMetadataType = <Metadata label={metadataType} type='type' />;
  }

  if (metadataStatus) {
    cardMetadata = true;
    cardMetadataStatus = <Metadata label={metadataStatus} type='status' />;
  }

  if (metadataTopic) {
    cardMetadata = true;
    cardMetadataTopic = <Metadata label={metadataTopic} type='topic' />;
  }

  if (metadataOrganisation) {
    cardMetadata = true;
    cardMetadataOrganisation = (
      <Metadata label={metadataOrganisation} type='organisation' />
    );
  }

  if (metadataPartOfLabel || metadataPartOfText) {
    cardMetadataPartOf = (
      <MetadataPartOf
        label={metadataPartOfLabel}
        text={metadataPartOfText}
        url={metadataPartOfUrl}
      />
    );
  }

  if (description) {
    cardDescription = <CardDescription description={description} />;
  }

  return (
    <div className='gw-card'>
      {cardImage}
      {cardTitle}
      {cardCallOut}
      {cardMetadata && (
        <div className='gw-card__metadata gw-card__metadata--flex'>
          {cardMetadataDate}
          {cardMetadataType}
          {cardMetadataStatus}
          {cardMetadataTopic}
          {cardMetadataOrganisation}
        </div>
      )}
      {cardMetadataPartOf}
      {cardDescription}
    </div>
  );
};

// Component export.
export default Card;
