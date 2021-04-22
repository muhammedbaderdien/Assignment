import { connect } from 'react-redux';
import ConfigurationScreen, { ConfigurationScreenProps } from '../components/Configuration';
import { setDisplayName, setServices } from '../core/actions/sdk';

const mapStateToProps = (props: ConfigurationScreenProps) => ({
  screenWidth: props.screenWidth,
});



const mapDispatchToProps = (dispatch: any) => ({
    setDisplayName: (displayName: string) => dispatch(setDisplayName(displayName)),
    setServices: (services: any) => dispatch(setServices(services))
});

const connector: any = connect(mapStateToProps, mapDispatchToProps);
export default connector(ConfigurationScreen);
