import {StyleSheet} from 'react-native';
import Fonts from './fonts';

const Styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerItem: {
    ...Fonts.script,
    fontSize: 24,
    padding: 20,
  },
});

export default Styles;
