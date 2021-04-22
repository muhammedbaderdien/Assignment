import { connect } from 'react-redux';
import ConfigurationScreen, { ConfigurationScreenProps } from '../components/Configuration';
import { setDisplayName } from '../core/actions/sdk';
import { State } from '../core/reducers';

const mapStateToProps = (state: State, props: ConfigurationScreenProps) => ({
  screenWidth: props.screenWidth,
});

const mapDispatchToProps = (dispatch: any) => ({
  setDisplayName: (displayName: string) => dispatch(setDisplayName(displayName))
});

const connector: any = connect(mapStateToProps, mapDispatchToProps);
export default connector(ConfigurationScreen);
