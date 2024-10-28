// Component props.
export interface MetadataPartOfLinkProps {
  url: string;
  text: string;
}

// Component render.
const MetadataPartOfLink = ({ url, text }: MetadataPartOfLinkProps) => {
  return <a href={url}>{text}</a>;
};

export default MetadataPartOfLink;
