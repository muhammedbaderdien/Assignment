import { mergeStyles } from '@fluentui/react';

const textFieldStyle = mergeStyles({
  width: '100%',
  height: '2.25rem'
});

const TextFieldStyleProps = {
  wrapper: {
    height: '2.25rem'
  },
  fieldGroup: {
    height: '2.25rem'
  }
};
const sendBoxStyle = mergeStyles({
  fontFamily: 'Roboto',
  border: '0rem', // 0px
  color: 'black',
  backgroundColor: '#eaebeb',
  fontWeight: 400,
  fontSize: '1rem', // 16px
  width: '100%',
  height: '54px',
  '::-webkit-input-placeholder': {
    fontSize: '1rem',
    fontFamily: 'Roboto',
  },
  '::-moz-placeholder': {
	 fontSize: '1rem',
	 fontFamily: 'Roboto',
  },
  ':-moz-placeholder': {
	 fontSize: '1rem',
	 fontFamily: 'Roboto',
    },
    paddingLeft: '0.5rem',
    paddingTop: '0px'
});

const sendIconStyle = mergeStyles({
  backgroundColor: '#eaebeb',
  width: '2.25rem',
  height: '2.25rem',
  color: '#474d4f',
  paddingLeft: '0.5rem',
  paddingTop: '18px',
  fontSize: '0.875rem' // 14px
});

export { textFieldStyle, sendBoxStyle, sendIconStyle, TextFieldStyleProps };
