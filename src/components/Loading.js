import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Text from '../components/Text';
import {colors} from '../utils/helper';

export default function Loading() {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.transparent,
      }}>
      <View
        style={{
          padding: 20,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: 10,
        }}>
        <ActivityIndicator size={'large'} />
        <Text color="black" style={{marginLeft: 10}} size="medium">
          Loading
        </Text>
      </View>
    </View>
  );
}
