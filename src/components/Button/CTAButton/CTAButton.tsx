import classNames from 'classnames';
import { ButtonOrLinkProps } from '../../../types/ButtonOrLink';

import './CTAButton.scss';
import { useState } from 'react';

type HEX = `#${string}`;

type BaseProps = {
  chevron?: boolean;
  large?: boolean;
  backgroundColourHex?: HEX;
  backgroundColourHoverHex?: HEX;
};

type ButtonProps = BaseProps & ButtonOrLinkProps;

const CTAButton = ({
  large,
  chevron,
  backgroundColourHex,
  backgroundColourHoverHex,
  ...props
}: ButtonProps) => {
  let btnClass = 'gw-btn';
  const buttonClasses: string[] = [btnClass, `${btnClass}--cta`];
  if (large) buttonClasses.push(`${btnClass}--lg`);
  if (chevron)
    buttonClasses.push(
      `${btnClass}--icon`,
      `${btnClass}--icon-chevron-right`,
      `${btnClass}--icon-right`
    );

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const buttonStyle = {
    backgroundColor: isHover ? backgroundColourHoverHex : backgroundColourHex,
  };

  if (props.as === 'link') {
    const { as, ...rest } = props;
    return (
      <a
        className={classNames(buttonClasses)}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {rest.children}
      </a>
    );
  }
  const { as, ...rest } = props;
  return (
    <button
      className={classNames(buttonClasses)}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    />
  );
};

// Component export.
export default CTAButton;
