import { useState } from 'react';
import { TextInput, Kbd, Group } from '@mantine/core';
import { Icon, iconsList } from '..';
import { Styles } from './SearchInput.styles';
import type { GroupProps } from '@mantine/core';
import type { FunctionComponent } from 'react';
import type { ISearchInputProps } from './SearchInput.types';

const RightSection: FunctionComponent<GroupProps> = ({ ...rest }) => {
  return (
    <Group spacing={5} {...rest}>
      <Kbd>Ctrl</Kbd>
      <Kbd>K</Kbd>
    </Group>
  );
};

export const SearchInput: FunctionComponent<ISearchInputProps> = ({
  id,
  placeholder,
  name,
  styles,
  ...rest
}) => {
  styles = styles ?? {};
  const [focusState, setFocusState] = useState(false);
  const { textInput, rightSection } = Styles({ focused: focusState });
  const { searchOutline } = iconsList;

  return (
    <TextInput
      type="search"
      placeholder={placeholder ?? 'Search everything ...'}
      id={`searchinput${id ? `-${id}` : ''}`}
      name={`searchinput${name ? `-${name}` : ''}`}
      icon={<Icon component={searchOutline} />}
      rightSection={<RightSection styles={rightSection} />}
      rightSectionWidth={80}
      styles={{ ...textInput, ...styles }}
      onFocus={() => setFocusState(true)}
      onBlur={() => setFocusState(false)}
      {...rest}
    />
  );
};

export default SearchInput;
