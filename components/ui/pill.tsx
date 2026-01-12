import React, { ReactNode } from 'react';
import { StyleSheet, Text } from "react-native";

import { Gaps, Radius } from '@/constants/layout';


interface Props {
  backgroundColor: string
  children?: ReactNode;
}

const Pill: React.FC<Props> = (props: Props) => (
  <Text style={[styles.pill, { backgroundColor: props.backgroundColor }]} {...props}>{props.children}</Text>
);

const styles =  StyleSheet.create({
  pill: {
    boxSizing: 'border-box',
    borderRadius: Radius.medium,
    color: 'white',
    gap: Gaps.small, 
    paddingInline: Gaps.small,
    fontSize: 12,
    height: 24,
    lineHeight: 24
    ,
    letterSpacing: 0.1,
    fontWeight: 600,
  },
});

export default Pill;

