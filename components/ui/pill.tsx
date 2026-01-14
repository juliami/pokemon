import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";

import { Gaps, Radius } from "@/constants/layout";
import { StyledText } from "../styled-text";

interface Props {
  backgroundColor: string;
  children?: ReactNode;
}

const Pill: React.FC<Props> = (props: Props) => (
  <StyledText
    style={[styles.pill, { backgroundColor: props.backgroundColor }]}
    {...props}
  >
    {props.children}
  </StyledText>
);

const styles = StyleSheet.create({
  pill: {
    boxSizing: "border-box",
    borderRadius: Radius.medium,
    color: "white",
    gap: Gaps.small,
    paddingInline: Gaps.small,
    fontSize: 14,
    height: 24,
    lineHeight: 24,
    letterSpacing: 0.1,
    fontWeight: 600,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});

export default Pill;
