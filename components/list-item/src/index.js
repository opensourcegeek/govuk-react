import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
  SPACING,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledListItem = styled('li')({
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
    marginBottom: SPACING.SCALE_1,
  },
});

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * <ListItem>List item example</ListItem>
 * ```
 *
 * With anchor
 * ```jsx
 * import { asAnchor } from '@govuk-react/hoc';
 *
 * <ListItem>
 *   <AnchorTag href="https://www.google.com/">{text('Children', 'List item example')}</AnchorTag>
 * </ListItem>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components
 */
const ListItem = props => <StyledListItem {...props} />;

ListItem.propTypes = {
  /** List item content */
  children: PropTypes.node.isRequired,
};

export default withWhiteSpace({ marginBottom: 0 })(ListItem);
