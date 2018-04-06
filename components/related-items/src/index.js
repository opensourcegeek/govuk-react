// https://govuk-static.herokuapp.com/component-guide/related_items

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import * as COLOUR from 'govuk-colours';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const RelatedItemsInner = glamorous.div({
  borderTop: `10px solid ${COLOUR.BLUE}`,
  paddingTop: SPACING.SCALE_1,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
  '> h3': {
    marginBottom: SPACING.SCALE_2,
  },
  '> ul': {
    marginBottom: SPACING.SCALE_4,
    '> li': {
      marginBottom: `calc(${SPACING.SCALE_2} + 2px)`,
    },
  },
});

const RelatedItems = ({ children, className }) => (
  <RelatedItemsInner className={className}>{children}</RelatedItemsInner>
);

RelatedItems.defaultProps = {
  className: undefined,
};

RelatedItems.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default RelatedItems;