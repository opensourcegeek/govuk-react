BackLink
========

### Import
```js
  import BackLink from '@govuk-react/back-link';
```
<!-- STORY -->

### Usage

Simple
```jsx
<BackLink>Back</BackLink>
```

With custom click handler
```jsx
<BackLink onClick={this.myCustomFunction}>Back</BackLink>
```

With `href` attribute
```jsx
<BackLink href='#'>Back</BackLink>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/back-link

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```'Back'``` | string | Text that will appear in the back link
 `onClick` |  | ```undefined``` | func | Custom function to run when the `onClick` event is fired


Breadcrumb
==========

### Import
```js
  import Breadcrumb from '@govuk-react/breadcrumb';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Breadcrumb>
  <a href="/section">Section</a>
  <a href="/section/sub-section">Sub-section</a>
  Current page
</Breadcrumb>
```

Using `asAnchor` HOC with, or without React Router
```jsx
import { Link } from 'react-router-dom';
import { asAnchor } from '@govuk-react/hoc';

const AnchorLink = asAnchor(Link);
const AnchorTag = asAnchor('a');

<Breadcrumb>
  <AnchorLink to="/section">Section</AnchorLink>
  <AnchorTag href="/section">Sub-section</AnchorTag>
</Breadcrumb>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Consider nested anchors, create an Atom for Breadcrumb links?

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Breadcrumb contents


Button
======

### Import
```js
  import Button from '@govuk-react/button';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Button>My button text</Button>
```

With Icon
```jsx
import { ButtonArrow } from '@govuk-react/icons';

<Button icon={<ButtonArrow />}>My button text</Button>
```

### References:
- https://govuk-elements.herokuapp.com/buttons/
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

### TODO:
- Use constants for some of the values cssinjs values
- Remove cascade styling for nested elements such as `svg`

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```'Button'``` | node | Button text
 `disabled` |  | ```false``` | bool | Renders a disabled button and removes pointer events if set to true
 `icon` |  | ```undefined``` | node | Button icon
 `start` |  | ```false``` | bool | Renders a large button if set to true


Checkbox
========

### Import
```js
  import Checkbox from '@govuk-react/checkbox';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Checkbox>Text displayed next to checkbox</Checkbox>
```

With disabled state
```jsx
<Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
```

Checkbox preselected
```jsx
<Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
```

Checkbox preselected & disabled
```jsx
<Checkbox disabled="disabled" defaultChecked>Farm or agricultural waste</Checkbox>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkboxes/_checkboxes.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text content for checkbox
 `className` |  | ```undefined``` | string | CSS Classname for outermost container


DateInput
=========

### Import
```js
  import DateInput from '@govuk-react/date-input';
```
<!-- STORY -->

### Usage

Simple
```jsx
<DateInput>What is your date of birth?</DateInput>
```

Date with hint text
```jsx
<DateInput hintText="For example, 31 03 1980">
  What is your date of birth?
</DateInput>
```

Date with hint text & error
```jsx
<DateInput
  hintText="For example, 31 03 1980"
  errorText="Error message goes here"
>
  What is your date of birth?
</DateInput>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-input

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `errorText` |  | ```undefined``` | string | Error text
 `hintText` |  | ```undefined``` | string | Optional hint text


DocumentFooterMetadata
======================

### Import
```js
  import DocumentFooterMetadata from '@govuk-react/document-footer-metadata';
```
<!-- STORY -->

### Usage


Simple
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');
const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];

<DocumentFooterMetadata from={fromData} />
```


DFM From & part of example
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');
const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];
const partOfData = [
  <AnchorTag href="/government/topics/energy">Energy</AnchorTag>,
  <AnchorTag href="/government/topics/environment">Environment</AnchorTag>,
];

<DocumentFooterMetadata from={fromData} partOf={partOfData} />
```


DFM From & other data example
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');
const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];
const otherData = [
  {
    id: 0,
    title: 'Consultation type',
    content: <AnchorTag href="/government/publications">Open</AnchorTag>,
  },
  {
    id: 1,
    title: 'Published',
    content: '20 January 2012',
  },
];

<DocumentFooterMetadata from={fromData} other={otherData} />
```

### References:
- https://govuk-static.herokuapp.com/component-guide/document_footer

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `from` |  | ```undefined``` | arrayOf[object Object] | Array of JSX nodes to render underneath the `from:` title
 `other` |  | ```undefined``` | arrayOf[object Object] | Array of Objects for any additional items, each object should contain an `id`, `title` and `content` property
 `partOf` |  | ```undefined``` | arrayOf[object Object] | Array of JSX nodes to render underneath the `part of:` title


ErrorSummary
============

### Import
```js
  import ErrorSummary from '@govuk-react/error-summary';
```
<!-- STORY -->

### Usage

Simple
```jsx
const heading = 'Message to alert the user to a problem goes here';
const description = 'Optional description of the errors and how to correct them';
const errors = [
  {
    targetName: 'national-insurance-number',
    text: 'National Insurance number error',
  },
  {
    targetName: 'description',
    text: 'Description of what you saw error',
  },
];

const onHandleErrorClick = (targetName) => {
  document.getElementsByName(targetName)[0].scrollIntoView();
};

<div>
  <ErrorSummary
    heading={heading}
    description={description}
    onHandleErrorClick={onHandleErrorClick}
    errors={errors}
  />
  <InputField
    name="national-insurance-number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60."
  >
    National Insurance number
  </InputField>
  <br />
  <TextArea name="description">Description of what you saw</TextArea>
</div>
```

### References:
- https://govuk-elements.herokuapp.com/errors/#summarise-errors
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/error-summary

### TODO:
- Swap out browser dependancy for context API to help with React Native support

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `description` |  | ```undefined``` | string | Optional description of the errors
 `errors` |  | ```[]``` | arrayOf[object Object] | Array of errors with text and target element name to scroll into view when clicked
 `heading` | true | `````` | string | Heading text
 `onHandleErrorClick` |  | ```() => {}``` | func | onClick function to scroll the target element into view


ErrorText
=========

### Import
```js
  import ErrorText from '@govuk-react/error-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
<ErrorText errorText="example">Example</ErrorText>
```

### References
- https://github.com/alphagov/govuk-frontend/tree/master/src/components

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | string | Text to describe the error


FileUpload
==========

### Import
```js
  import FileUpload from '@govuk-react/file-upload';
```
<!-- STORY -->

### Usage

Simple
```jsx
<FileUpload name="group0">Upload a document</FileUpload>
```

Input with hint text
```jsx
<FileUpload
  name="group1"
  acceptedFormats=".jpg, .png"
  hint={['This can be in either JPG or PNG format']}
>
  Upload a photo
</FileUpload>
```

Input with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<FileUpload
  name="group1"
  acceptedFormats=".jpg, .png"
  hint={['This can be in either JPG or PNG format']}
  meta={meta}
>
  Upload a photo
</FileUpload>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/file-upload

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `acceptedFormats` |  | ```undefined``` | string | 
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | Optional hint text
 `meta` |  | ```{}``` | shape[object Object] | Final form meta object, pending adjustment/removal


GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->

Should always be wrapped by `GridRow`. Will always render a column at 100% width if
the browser width is below the `LARGESCREEN` breakpoint.

### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol columnOneHalf>
      ...
    </GridCol>
    <GridCol columnOneQuarter>
      ...
    </GridCol>
    <GridCol columnOneQuarter>
      ...
    </GridCol>
  <GridRow>
    <GridCol columnOneThird>
      ...
    </GridCol>
    <GridCol columnTwoThirds>
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | GridCol content
 `columnOneHalf` |  | ```false``` | bool | Dimension setting for the column
 `columnOneQuarter` |  | ```false``` | bool | Dimension setting for the column
 `columnOneThird` |  | ```false``` | bool | Dimension setting for the column
 `columnTwoThirds` |  | ```false``` | bool | Dimension setting for the column


GridRow
=======

### Import
```js
  import GridRow from '@govuk-react/grid-row';
```
<!-- STORY -->

### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more GridCol nodes


Header
======

### Import
```js
  import Header from '@govuk-react/header';
```
<!-- STORY -->

### Usage


Simple
```jsx
<Header level={1}>Heading text</Header>
```

Using shortcuts
```jsx
import { H1, H2, H3, H4, H5, H6 } from "@govuk-react/header";

<H1>h1</H1>
<H2>h2</H2>
<H3>h3</H3>
<H4>h4</H4>
<H5>h5</H5>
<H6>h6</H6>
```

Differing sizes
```jsx
<Header level={6} size="XXLARGE">
  h6 with XXLARGE style
</Header>
<Header level={2} size="XSMALL">
  h2 with XSMALL style
</Header>
<H3 size="LARGE">h3 with LARGE style</H3>
```

Props pass through
```jsx
<Header onClick={() => { console.log('clicked'); }}>Click me</Header>
```

### References:
- https://govuk-elements.herokuapp.com/typography/#typography-headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | ```1``` | number | Semantic heading level value between 1 and 6
 `size` |  | ```undefined``` | enumObject.keys(FONT_SIZES) | Visual size level, accepts   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XSMALL`


HiddenText
==========

### Import
```js
  import HiddenText from '@govuk-react/hidden-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
import Paragraph from '@govuk-react/paragraph';

<HiddenText summaryText={'Help with nationality'}>
  <Paragraph mb={0}>I am a paragraph. Please read me.</Paragraph>
</HiddenText>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-hidden-text
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/details/_details.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | The nodes that will be displayed within the InsetText component
 `summaryText` | true | `````` | string | Text for the summary button link e.g. Help with nationality


HintText
========

### Import
```js
  import HintText from '@govuk-react/hint-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
<HintText>Example</HintText>
```

### References
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the hint


InputField
==========

### Import
```js
  import InputField from '@govuk-react/input-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<InputField name="group0">National Insurance number</InputField>
```

Input with hint text
```jsx
<InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
 >
   National Insurance number
 </InputField>
```

Input with hint text & error
```jsx
 const meta = {
   touched: true,
   error: 'Example',
 };

 <InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
   meta={meta}
 >
   National Insurance number
 </InputField>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | node | 
 `input` |  | ```{}``` | shape[object Object] | 
 `meta` |  | ```{}``` | shape[object Object] | 


Input
=====

### Import
```js
  import Input from '@govuk-react/input';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Input />
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### TODO:
- Remove `errorColor` and provide examples on how to extend the component

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `type` |  | ```'text'``` | string | HTML `<Input />` type


InsetText
=========

### Import
```js
  import InsetText from '@govuk-react/inset-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
import Paragraph from '@govuk-react/paragraph';

<InsetText>
 <Paragraph mb={0}>Hello</Paragraph>
</InsetText>
```

Narrow border
```jsx
import Paragraph from '@govuk-react/paragraph';

<InsetText isNarrow>
 <Paragraph mb={0}>Hello</Paragraph>
</InsetText>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-inset-text
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_panels.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `isNarrow` |  | ```false``` | bool | Renders a narrow border following GDS guides if set to true


LabelText
=========

### Import
```js
  import LabelText from '@govuk-react/label-text';
```
<!-- STORY -->

### Usage

Simple
```jsx
<LabelText>Example</LabelText>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the label


Label
=====

### Import
```js
  import Label from '@govuk-react/label';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Label>Example</Label>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the label


Layout
======

### Import
```js
  import Layout from '@govuk-react/layout';
```
<!-- STORY -->

THIS COMPONENT IS NO LONGER REQUIRED TO ACHIEVE LAYOUT;
1. `GridCol` contains the required gutters, we do not need to provide additional gutter
to build an accurate grid layout.

2. `GridRow` contains the required `display: flex;` and associated properties for `GridCol`.

3. `Main` contains the required properties to center a container that matches up with `TopNav`
and house the remaining body of content for the page.

If you feel you may still need a `Layout` component, please do raise a ticket on [Github](https://github.com/UKHomeOffice/govuk-react/issues/177)

### Usage

This component provides default padding.
You can use this component to wrap Grid components however it is not required.

Simple usage
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Layout>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | GridRow and GridCol children nodes


LeadParagraph
=============

### Import
```js
  import LeadParagraph from '@govuk-react/lead-paragraph';
```
<!-- STORY -->

### Usage


Simple
```jsx
<LeadParagraph>LeadParagraph example</LeadParagraph>
```

### References
- https://govuk-static.herokuapp.com/component-guide/lead_paragraph

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text in the Lead paragraph


ListItem
========

### Import
```js
  import ListItem from '@govuk-react/list-item';
```
<!-- STORY -->

### Usage


Simple
```jsx
<ListItem>List item example</ListItem>
```

With anchor
```jsx
import { asAnchor } from '@govuk-react/hoc';

<ListItem>
  <AnchorTag href="https://www.google.com/">{text('Children', 'List item example')}</AnchorTag>
</ListItem>
```

### References
- https://github.com/alphagov/govuk-frontend/tree/master/src/components

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | List item content


ListNavigation
==============

### Import
```js
  import ListNavigation from '@govuk-react/list-navigation';
```
<!-- STORY -->

### Usage

Simple
```jsx
<ListNavigation>
  <a href="/section-a">Section A</a>
  <a href="/section-b">Section B</a>
</ListNavigation>
```

Current recommended approach using the `asAnchor` HOC for GDS styled links
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');

<ListNavigation listStyleType="square">
  <AnchorTag href="https://example.com/link-a">Link A</AnchorTag>
  <AnchorTag href="https://example.com/link-b">Link B</AnchorTag>
</ListNavigation>
```

Using React Router and `asAnchor` HOC for GDS styled links
```jsx
import { Link } from 'react-router-dom';
import { asAnchor } from '@govuk-react/hoc';

const AnchorLink = asAnchor(Link);

<ListNavigation listStyleType="circle">
  <AnchorLink to="/link-a">Link A</AnchorLink>
  <AnchorLink to="/link-b">Link B</AnchorLink>
</ListNavigation>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Consider nested anchors, should developers have to use the HOC to preserve link styling?
- Fix active state overlaping siblings

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | List navigation content
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`


LoadingBox
==========

### Import
```js
  import LoadingBox from '@govuk-react/loading-box';
```
<!-- STORY -->

### Usage

Simple
```jsx
<LoadingBox loading>
  Lorem ipsum dolor sit amet
</LoadingBox>
```

Loading box complex
```jsx
<LoadingBox
   loading={false}
   backgroundColor={'#fff'}
   timeIn={800}
   timeOut={200}
   backgroundColorOpacity={0.85}
   spinnerColor={'#000'}
>
  Lorem ipsum dolor sit amet
</LoadingBox>
```

### References:
- https://govuk-loader-prototype.herokuapp.com/components/loader

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `backgroundColor` |  | ```WHITE``` | string | Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
 `backgroundColorOpacity` |  | ```0.85``` | number | Opacity of loading spinner backgroud colour when loading is true
 `children` | true | `````` | node | One or more children nodes that loading box will overlay
 `loading` |  | ```false``` | bool | Whether loading is currently set to true or false
 `spinnerColor` |  | ```BLACK``` | string | Color (3 or 6 Hex char) of loading spinner
 `timeIn` |  | ```800``` | number | Length of fade-in animation in milliseconds
 `timeOut` |  | ```200``` | number | Length of fade-out animation in milliseconds
 `title` |  | ```undefined``` | string | Loading spinner title text


Main
====

### Import
```js
  import Main from '@govuk-react/main';
```
<!-- STORY -->

Provides a container which aligns to the topNav component,
is centered, and provides top padding.


### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Main>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Main>
```

### TODO
- Implement the 1020px min-width MQ to constants

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | Child nodes for the page being built


MultiChoice
===========

### Import
```js
  import MultiChoice from '@govuk-react/multi-choice';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Radio from '@govuk-react/radio';

<MultiChoice label="example">
   <Radio name="group1" inline>
     Yes
   </Radio>
   <Radio name="group1" inline>
     No
   </Radio>
</MultiChoice>
```

### References:
- https://govuk-elements.herokuapp.com/errors/
- https://govuk-elements.herokuapp.com/errors/example-form-validation-single-question-radio

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | 
 `label` | true | `````` | node | 
 `meta` |  | ```{}``` | shape[object Object] | 


OrderedList
===========

### Import
```js
  import OrderedList from '@govuk-react/ordered-list';
```
<!-- STORY -->

### Usage

Simple
```jsx
import ListItem from '@govuk-react/list-item';

<OrderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

with Roman
```jsx
import ListItem from '@govuk-react/list-item';

<OrderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

### References
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`


Pagination
==========

### Import
```js
  import Pagination from '@govuk-react/pagination';
```
<!-- STORY -->

### Usage

Simple usage with `asPaginationItem` HOC
```jsx
import { asPaginationItem } from '@govuk-react/hoc';

const PaginationAnchor = asPaginationItem('a');

<Pagination>
  <PaginationAnchor href="#prev" previousPage>
    Previous page
  </PaginationAnchor>
  <PaginationAnchor href="#next" nextPage>
    Next page
  </PaginationAnchor>
</Pagination>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | `asPaginationItem` nodes


Panel
=====

### Import
```js
  import Panel from '@govuk-react/panel';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Panel panelTitle="Application complete" />
```

Panel with header and HTML body
```jsx
<Panel
   panelTitle="Application complete"
   panelBody={['Your reference number', <br />, <strong>HDJ2123F</strong>]}
 />
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/panel

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `panelBody` |  | ```undefined``` | union(string|array) | Panel body text
 `panelTitle` | true | `````` | string | Panel title text


Paragraph
=========

### Import
```js
  import Paragraph from '@govuk-react/paragraph';
```
<!-- STORY -->

Supports bold, italic, links, inline code and block code in Markdown ONLY.
This is to ensure we follow GDS as closely as possible.
It is worth noting that GDS recommends avoiding bold and italics.

Bold should be avoided in general as not only can it dilute the message, it will also
cause Screenreaders to increase the volume of any bold text to reflect the increase in
font-weight.

### Usage

Simple
```jsx
<Paragraph>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

As supporting text
```jsx
<Paragraph supportingText>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

With a block of code
````jsx
<Paragraph>
  Some other text...
  ```
  Some Code Block
  ```
  Some more text.
</Paragraph>
````

### References
- https://govuk-elements.herokuapp.com/typography/#typography-body-copy

### TODO
- Add test for supporting text
- Review code snippet styling
- Remove magic numbers from inline code styling blocks

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```''``` | node | Text content supporting markdown
 `supportingText` |  | ```false``` | bool | Is this paragraph supporting text for another element?


PhaseBadge
==========

### Import
```js
  import PhaseBadge from '@govuk-react/phase-badge';
```
<!-- STORY -->

### Usage

Simple
```jsx
<PhaseBadge>beta</PhaseBadge>
```

### References:
- https://govuk-elements.herokuapp.com/alpha-beta-banners/


PhaseBanner
===========

### Import
```js
  import PhaseBanner from '@govuk-react/phase-banner';
```
<!-- STORY -->

### Usage

Alpha
```jsx
<PhaseBanner level="alpha">
   This part of GOV.UK is being rebuilt &#8211;{' '}
   <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 </PhaseBanner>
```

Beta
```jsx
<PhaseBanner level="beta">
   This part of GOV.UK is being rebuilt &#8211;{' '}
   <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 </PhaseBanner>
```

### References:
- https://govuk-elements.herokuapp.com/alpha-beta-banners/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Children text and links
 `level` | true | `````` | string | Alpha or beta banner


Radio
=====

### Import
```js
  import Radio from '@govuk-react/radio';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Radio name="group1">Radio button text example</Radio>
```

Radio stacked
```jsx
 <div>
   <Radio name="group1">Waste from animal carcasses</Radio>
   <Radio name="group1">Waste from mines or quarries</Radio>
   <Radio name="group1">Farm or agricultural waste</Radio>
 </div>
```

Radio inline
```jsx
 <div>
   <Radio name="group1" inline>
     Yes
   </Radio>
   <Radio name="group1" inline>
     No
   </Radio>
 </div>
```

Radio disabled
```jsx
 <div>
   <Radio name="group1" disabled="disabled">
     Disabled checkbox option
   </Radio>
 </div>
 ```

Radio preselected
```jsx
 <div>
   <Radio name="group1" checked>
     Farm or agricultural waste
   </Radio>
 </div>
```

Radio preselected & disabled
```jsx
 <div>
   <Radio name="group1" disabled="disabled" checked>
     Farm or agricultural waste
   </Radio>
 </div>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `className` |  | ```undefined``` | string | 
 `inline` |  | ```false``` | bool | 


RelatedItems
============

### Import
```js
  import RelatedItems from '@govuk-react/related-items';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Header from '@govuk-react/header';
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');

<RelatedItems>
  <Header level={3}>Example header</Header>
  <UnorderedList listStyleType="none">
    <ListItem>
      <AnchorTag href="https://example.com">Link A</AnchorTag>
    </ListItem>
  </UnorderedList>
</RelatedItems>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/related_items

### TODO:
- Replace CSS selectors with imported components

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Related items content


SearchBox
=========

### Import
```js
  import SearchBox from '@govuk-react/search-box';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Layout from '@govuk-react/layout';
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
   <GridRow>
     <GridCol>
       <SearchBox placeholder="Search GOV.UK">SearchBox example</SearchBox>
     </GridCol>
   </GridRow>
 </Layout>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/search

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `placeholder` |  | ```undefined``` | string | 


Select
======

### Import
```js
  import Select from '@govuk-react/select';
```
<!-- STORY -->

### Usage

Simple
```jsx
 <Select name="group1" label="This is a label">
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
```

Select with hint text
```jsx
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
```

Select with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

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
```

Standalone input with inline label
```jsx
import LabelText from '@govuk-react/label-text';
import { SelectInput } '@govuk-react/select';

<label>
   <LabelText>Sort by:&nbsp;
     <SelectInput>
       <option value="0">People</option>
       <option value="1">Animals</option>
       <option value="2">Vegetables</option>
     </SelectInput>
   </LabelText>
 </label>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/select

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `errorText` |  | ```undefined``` | string | 
 `hint` |  | ```undefined``` | string | 
 `input` |  | ```{}``` | shape[object Object] | 
 `label` | true | `````` | string | 
 `meta` |  | ```{}``` | shape[object Object] | 


Table
=====

### Import
```js
  import Table from '@govuk-react/table';
```
<!-- STORY -->

### Usage

Component default
```jsx
const example1Body = (
 <React.Fragment>
   <Table.Row>
     <Table.CellHeader>First 6 weeks</Table.CellHeader>
     <Table.Cell>£109.80 per week</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Next 33 weeks</Table.Cell>
     <Table.Cell>£109.80 per week</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Total estimated pay</Table.Cell>
     <Table.Cell>£4,282.20</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Tell the mother&rsquo;s employer</Table.Cell>
     <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
   </Table.Row>
 </React.Fragment>
);

<Table caption="Dates and amounts" body={example1Body} />
```

Numeric tabular data
```jsx
const example2Head = (
  <Table.Row>
    <Table.CellHeader>Month you apply</Table.CellHeader>
    <Table.CellHeader alignRight>Rate for vehicles</Table.CellHeader>
    <Table.CellHeader alignRight>Rate for bicycles</Table.CellHeader>
  </Table.Row>
);

const example2Body = (
  <React.Fragment>
    <Table.Row>
      <Table.CellHeader>January</Table.CellHeader>
      <Table.Cell alignRight>£165.00</Table.Cell>
      <Table.Cell alignRight>£85.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>February</Table.CellHeader>
      <Table.Cell alignRight>£165.00</Table.Cell>
      <Table.Cell alignRight>£85.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>March</Table.CellHeader>
      <Table.Cell alignRight>£151.00</Table.Cell>
      <Table.Cell alignRight>£77.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>April</Table.CellHeader>
      <Table.Cell alignRight>£136.00</Table.Cell>
      <Table.Cell alignRight>£70.00</Table.Cell>
    </Table.Row>
  </React.Fragment>
);

<Table
 caption="Attention, I am the caption of this ship!"
 head={example2Head}
 body={example2Body}
/>
```

### References:
- https://govuk-elements.herokuapp.com/alpha-beta-banners/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `body` | true | `````` | node | Table body rows and cells
 `caption` |  | ```undefined``` | string | Table caption title
 `head` |  | ```undefined``` | node | Table header rows and cells


TextArea
========

### Import
```js
  import TextArea from '@govuk-react/text-area';
```
<!-- STORY -->

### Usage

Simple
```jsx
<TextArea name="group1">Description of what you saw</TextArea>
```

TextArea with hint text
```jsx
<TextArea name="group1" hint={['Enter as many words as you like']}>
  Description of what you saw
</TextArea>
```

TextArea with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<TextArea
   name="group1"
   hint={['Enter as many words as you like']}
   meta={meta}
 >
   Description of what you saw
 </TextArea>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/textarea

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | 
 `input` |  | ```{}``` | shape[object Object] | 
 `meta` |  | ```{}``` | shape[object Object] | 


TextField
=========

### Import
```js
  import TextField from '@govuk-react/text-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<TextField>Label text</TextField>
```

With hint and an example error
```jsx
<TextField hint="hint text" meta={{error: "some error information"}}>Label text</TextField>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
- https://medium.com/@penx/form-elements-in-presentational-component-packages-a618e9aa7416
- https://redux-form.com/7.1.2/docs/api/field.md/#input-props
- https://redux-form.com/7.1.2/docs/api/field.md/#meta-props

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | string | The text label presented to a user
 `hint` |  | ```undefined``` | string | An optional text string to help a user enter form data
 `input` |  | ```{   name: undefined,   onBlur: undefined,   onChange: undefined,   onFocus: undefined,   value: undefined, }``` | shape[object Object] | An input object based off https://redux-form.com/7.1.2/docs/api/field.md/#input-props
 `meta` |  | ```{   active: undefined,   dirty: undefined,   dirtySinceLastSubmit: undefined,   error: undefined,   initial: undefined,   invalid: undefined,   pristine: undefined,   submitError: undefined,   submitFailed: undefined,   submitSucceeded: undefined,   touched: undefined,   valid: undefined,   visited: undefined, }``` | shape[object Object] | A meta object based off https://redux-form.com/7.1.2/docs/api/field.md/#meta-props


TopNav
======

### Import
```js
  import TopNav from '@govuk-react/top-nav';
```
<!-- STORY -->

### Usage

TopNav with logo, service title and navigation items
```jsx
import CrownIcon from '@govuk-react/icon-crown';
import SearchBox from '@govuk-react/search-box';
import Header from '@govuk-react/header';
import TopNav, { asNavLinkAnchor, asTopNavAnchor } from '@govuk-react/top-nav';

const LogoAnchor = asTopNavAnchor('a');
const NavAnchor = asNavLinkAnchor('a');

const link = 'https://example.com?=1';

const Company = (
  <LogoAnchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoAnchor>
);

const ServiceTitle = (
  <NavAnchor href={link} target="new">
    <Header mb="0" level={3}>Service Title</Header>
  </NavAnchor>
);

const Search = (
  <SearchBox placeholder="Search">hi</SearchBox>
);

<TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
  <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavAnchor>
  <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavAnchor>
</TopNav>
```

```jsx
import { BrowserRouter, Link } from 'react-router-dom';
import CrownIcon from '@govuk-react/icon-crown';
import Header from '@govuk-react/header';
import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoLink = asTopNavAnchor(Link);
const NavLink= asNavLinkAnchor(Link);

const reactRouterLink = '/section';
const CompanyLink = (
  <LogoLink to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoLink>
);

const ServiceTitleLink = (
  <NavLink to={reactRouterLink}>
    <Header mb="0" level={3}>Service Title</Header>
  </NavLink>
);

<BrowserRouter>
  <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
</BrowserRouter>
```

### References:
- http://alphagov.github.io/govuk_template/example-proposition-menu.html

### TODO:
- TODO: this component is a work in progress and needs to more closely match existing examples
- TODO: is TopNav the right name? What's it called in other GDS styles/patterns?
- TODO: (The name Header is ambiguous)
- TODO: Fix the position and design of this button
- TODO: #205 Use context api and/or render props for `active` navigation items
- TODO: Vertical alignment here needs some work, perhaps should be its own component
- TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `bgColor` |  | ```BLACK``` | string | Top nav background color
 `children` |  | ```undefined``` | node | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | ```WHITE``` | string | Top nav text color
 `company` |  | ```undefined``` | node | Company component e.g. GOV UK
 `search` |  | ```false``` | node | Search component
 `serviceTitle` |  | ```undefined``` | node | Service title component e.g. Food Standards Authority


UnorderedList
=============

### Import
```js
  import UnorderedList from '@govuk-react/unordered-list';
```
<!-- STORY -->

### Usage

Simple
```jsx
import ListItem from '@govuk-react/list-item';

<UnorderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

With listStyleType option
```jsx
import ListItem from '@govuk-react/list-item';

<UnorderedList listStyleType="square">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

### References
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more ListItem components
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`


WarningText
===========

### Import
```js
  import WarningText from '@govuk-react/warning-text';
```
<!-- STORY -->

### Usage

Simple
```jsx
<WarningText>Example</WarningText>
```

### References:
- https://govuk-elements.herokuapp.com/typography/#typography-warning-text
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/warning-text

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Warning text to be displayed


