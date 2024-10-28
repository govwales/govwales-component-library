import React, { FormEventHandler, useEffect, useState } from 'react';

// Component SCSS.
import './SiteSearch.scss';
import { TextInput, TextInputProps } from '../TextInput';
import { PrimaryButton } from '../Button';

// Component props
export interface SiteSearchProps {
  header?: boolean;
  searchButtonLabel: string;
  textInput: TextInputProps;
  formHandleSubmit?: FormEventHandler<HTMLFormElement>;
}

// Component render
const SiteSearch = ({
  header = true,
  textInput,
  searchButtonLabel,
  formHandleSubmit,
}: SiteSearchProps) => {
  let classes = 'gw-site-search';

  if (!header) {
    classes = classes + ' gw-site-search--lg';
  }

  const [value, setValue] = useState(textInput.value);

  useEffect(() => {
    setValue(textInput.value);
  }, [textInput.value, setValue]);

  return (
    <form
      className={classes}
      id='gw-site-search'
      name='gw-site-search'
      role='search'
      onSubmit={formHandleSubmit}
    >
      <TextInput
        label={textInput.label}
        id={textInput.id}
        type={'text'}
        name={textInput.name}
        onChange={(e: {
          target: { value: React.SetStateAction<string | undefined> };
        }) => setValue(e.target.value as string)}
        value={value}
        labelHidden={true}
        placeholder={textInput.placeholder}
        maxLength={128}
        size={30}
      />
      <PrimaryButton
        as='button'
        colour='red'
        iconOnly={true}
        icon='search'
        size={header ? 'sm' : 'lg'}
        type='submit'
      >
        {searchButtonLabel}
      </PrimaryButton>
    </form>
  );
};

export default SiteSearch;
