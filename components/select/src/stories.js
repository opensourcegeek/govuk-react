import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '.';

const meta = {
  touched: true,
  error: 'Example',
};

storiesOf('Select', module).add('Component default', () => (
  <Select name="group1" label="This is a label">
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
));

storiesOf('Select', module).add('Select with hintText', () => (
  <Select
    name="group1"
    label="This is a label"
    hint={[
      'This is and example of hintText/description of what we need from you.',
    ]}
  >
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
));

storiesOf('Select', module).add('Select with hintText & error', () => (
  <Select
    name="group1"
    label="This is a label"
    hint={[
      'This is and example of hintText/description of what we need from you.',
    ]}
    meta={meta}
  >
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
));