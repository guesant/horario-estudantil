import * as React from 'react';
import { useState } from 'react';
import UIHeaderSearchField from '../UIHeaderSearchField/UIHeaderSearchField';

const UIHeaderSearch = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <UIHeaderSearchField value={value} setValue={setValue} />
    </>
  );
};

export default UIHeaderSearch;
