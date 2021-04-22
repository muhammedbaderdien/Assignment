import { mergeStyles, /*getTheme*/ } from '@fluentui/react';

//const palette = getTheme().palette;
export const videoHint = mergeStyles({
  //backgroundColor: palette.neutralSecondary,
  fontFamily: 'Bebas Neue',
  bottom: '5%',
  height: '1.75rem',
  boxShadow: '0 0 1px 0 rgba(0,0,0,.16)',
  color: '#474d4f', //palette.neutralLighter,
  fontSize: '1.25rem',
  lineHeight: '1.0625rem',
  textAlign: 'left',
  left: '2%',
  overflow: 'hidden',
  position: 'absolute',
  padding: '0.25rem',
  whiteSpace: 'nowrap',
  maxWidth: '40%',
  borderRadius: 4
});
export const mediaContainer = mergeStyles({
  position: 'relative',
  height: '100%',
  width: '100%',
  background: 'transparent'
});
export const localVideoContainerStyle = mergeStyles(mediaContainer, {
  width: '100%',
  height: '100%',
  transform: 'rotateY(180deg)'
});
