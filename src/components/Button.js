import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Button({title, color, style, textColor, ...props}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={[
        style,
        {
          height: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
          backgroundColor: color,
        },
      ]}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
}
