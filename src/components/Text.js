import React from 'react';
import {Text} from 'react-native';

function CustomText({children, style, size, bold, color, ...props}) {
  const renderText = () => {
    switch (size) {
      case 'small':
        return (
          <Text
            {...props}
            style={[
              style,
              {
                fontSize: 13,
                fontWeight: bold ? 'bold' : null,
                lineHeight: 20,
                color: color,
              },
            ]}>
            {children}
          </Text>
        );

      case 'medium':
        return (
          <Text
            {...props}
            style={[
              style,
              {
                fontSize: 16,
                fontWeight: bold ? 'bold' : null,
                lineHeight: 20,
                color: color,
              },
            ]}>
            {children}
          </Text>
        );

      case 'large':
        return (
          <Text
            {...props}
            style={[
              style,
              {
                fontSize: 20,
                fontWeight: bold ? 'bold' : null,
                lineHeight: 20,
                color: color,
              },
            ]}>
            {children}
          </Text>
        );

      default:
        return (
          <Text
            {...props}
            style={[
              style,
              {
                fontWeight: bold ? 'bold' : null,
                color: color,
              },
            ]}>
            {children}
          </Text>
        );
    }
  };
  return renderText();
}

export default CustomText;
