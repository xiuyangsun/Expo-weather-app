import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'expo-modules-core';
import { colors } from '../utils';

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.os === 'ios' ? 'ios-refresh' : 'md-refresh';

  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
});
