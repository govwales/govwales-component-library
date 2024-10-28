import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type FixedWidth = 20 | 10 | 5 | 4 | 3 | 2;
type FluidWidth = 75 | 66 | 50 | 33 | 25;
type labelSizes = 'lg';

// Component props.
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  errorMessage?: string;
  fixedWidth?: FixedWidth;
  fluidWidth?: FluidWidth;
  hint?: string;
  id: string;
  label: string;
  labelHidden?: boolean;
  labelSize?: labelSizes;
}

// Component render.
const TextInput = ({
  description,
  errorMessage,
  fixedWidth,
  fluidWidth,
  hint,
  id,
  label,
  labelSize,
  labelHidden,
  ...rest
}: TextInputProps) => {
  let labelClasses = 'gw-label';
  if (labelHidden) labelClasses += ' gw-visually-hidden';
  if (labelSize) labelClasses += ` gw-label--${labelSize}`;

  let inputClass = 'gw-input';
  const inputClasses: string[] = [inputClass];
  // Fluid or Fixed-width modifier.
  if (fixedWidth) {
    inputClasses.push(`${inputClass}--fixed-${fixedWidth}`);
  } else if (fluidWidth) {
    inputClasses.push(`${inputClass}--fluid-${fluidWidth}`);
  }

  return (
    <>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      {description && labelHidden !== true && (
        <div className='gw-description'>{description}</div>
      )}
      {hint && labelHidden !== true && <div className='gw-hint'>{hint}</div>}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      <input className={classNames(inputClasses)} id={id} {...rest} />
    </>
  );
};

export default TextInput;
