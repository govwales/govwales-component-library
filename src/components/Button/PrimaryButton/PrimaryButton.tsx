import classNames from 'classnames';
import { ButtonOrLinkProps } from '../../../types/ButtonOrLink';

type IconProps = {
  icon?:
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'chevron-down'
    | 'search'
    | 'close'
    | 'save';
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
};

type BaseProps = IconProps & {
  size?: 'sm' | 'lg';
  colour?: 'red' | 'black' | 'grey' | 'green';
};

type ButtonProps = BaseProps & ButtonOrLinkProps;

const PrimaryButton = ({
  size,
  colour,
  icon,
  iconPosition = 'right',
  iconOnly,
  ...props
}: ButtonProps) => {
  let btnClass = 'gw-btn';
  const buttonClasses: string[] = [btnClass, `${btnClass}--primary`];
  if (size) buttonClasses.push(`${btnClass}--${size}`);
  if (colour) buttonClasses.push(`${btnClass}--primary-${colour}`);
  if (icon && iconPosition) {
    buttonClasses.push(`${btnClass}--icon`);
    buttonClasses.push(`${btnClass}--icon-${icon}`);
    if (iconOnly) {
      buttonClasses.push(`${btnClass}--icon-only`);
    } else {
      buttonClasses.push(`${btnClass}--icon-${iconPosition}`);
    }
  }

  if (props.as === 'link') {
    const { as, ...rest } = props;
    return (
      <a className={classNames(buttonClasses)} {...rest}>
        {rest.children}
      </a>
    );
  }
  const { as, ...rest } = props;
  return <button className={classNames(buttonClasses)} {...rest} />;
};

// Component export.
export default PrimaryButton;
