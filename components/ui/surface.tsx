import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { Gaps, Radius } from '@/constants/layout';



interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const Surface: React.FC<Props> = (props: Props) => (
  <View style={styles.surface} {...props}>{props.children}</View>
);

const styles =  StyleSheet.create({
  surface: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    borderRadius: Radius.small,
    display:'flex',
    flexDirection:'column',
    gap: Gaps.small, 
    paddingBlock: Gaps.xLarge,
  },
});

export default Surface;

