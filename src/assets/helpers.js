import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  MainBox: {
    width: '87%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 26,
    paddingVertical: '3%',
    alignItems: 'center',
  },
  MainText: {
    fontSize: 24,
    paddingVertical: '3%',
    fontWeight: '800',
    fontStyle: 'italic',
    color: '#376FCC',
  },
  Note: {
    fontSize: 12,
    fontWeight: '800',
    color: '#376FCC',
    textAlign: 'center',
    paddingHorizontal: '10%',
  },
  FbGoogleBox: {
    flexDirection: 'row',
    height: responsiveHeight(5.5),
    backgroundColor: 'white',
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
  },
});
