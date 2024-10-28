// Component SCSS.
import './ErrorMessage.scss';

// Component props.
export interface ErrorMessageProps {
  errorMessage: string;
}

// Component render.
const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <div className='gw-error-message'>{errorMessage}</div>;
};

export default ErrorMessage;
