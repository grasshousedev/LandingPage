import emotion from 'styled-components';
import flex from 'styles/flex';
import posed from 'react-pose';
import FontAwesomeIcon from 'icons/Icon.js';
import { ELEMENTS, zIndexFor } from 'styles/zindex';

export const MenuBar = emotion(
  posed.div({
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -30 }
  })
)({
  position: 'relative',
  ...flex.horizontal,
  ...flex.centerHorizontalV,
  ...flex.justifyEnd,
  ...zIndexFor(ELEMENTS.MENUBAR),
  height: 25,
  width: '100%',
  backgroundColor: '#191d28',
  opacity: 0
});

export const Icons = emotion.div({
  ...flex.horizontal,
  ...flex.centerHorizontalV,
  height: '100%',
  marginRight: 20
});

export const Item = emotion.div(
  {
    ...flex.horizontal,
    ...flex.centerHorizontal,
    userSelect: 'none',
    cursor: 'default',
    minWidth: 25,
    padding: `0 5px`,
    height: '100%',
    transition: 'all 150ms linear'
  },
  ({ selected, onClick }) => ({
    ...(selected && {
      backgroundColor: '#2b85f2'
    }),
    ...(onClick &&
      !selected && {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#193046'
        }
      })
  })
);

export const Icon = emotion(FontAwesomeIcon)({
  width: `15px !important`,
  height: `15px !important`,
  fill: 'white'
});

export const Text = emotion.div({ fontSize: 13, color: 'white' });
