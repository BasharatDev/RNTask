import react from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {APP_STATE} from '../redux/AppLoader/getState';

export const AppLoader = () => {
  const loading = useSelector(APP_STATE.loading);

  if (!loading) return <></>;
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size={25} color={'#fff'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999,
  },
});
