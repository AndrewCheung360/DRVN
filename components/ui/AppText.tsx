import React, { useMemo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type TextVariant = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';

interface AppTextProps extends TextProps {
  variant?: TextVariant;
}

export function AppText({ style, variant = 'regular', ...props }: AppTextProps) {
  // Memoize the font family so it's only recalculated when 'variant' changes
  const fontFamily = useMemo(() => {
    switch (variant) {
      case 'bold': return 'GeistMono-Bold';
      case 'semiBold': return 'GeistMono-SemiBold';
      case 'medium': return 'GeistMono-Medium';
      case 'light': return 'GeistMono-Light';
      default: return 'GeistMono-Regular';
    }
  }, [variant]);

  return (
    <Text 
      style={[
        styles.base,        // 1. Static defaults
        { fontFamily },     // 2. Computed font
        style               // 3. Team overrides
      ]} 
      {...props} 
    />
  );
}

const styles = StyleSheet.create({
  base: {
    color: '#fff', 
    fontSize: 16,
    // Added default line height to make the mono font more readable
    lineHeight: 22, 
  },
});