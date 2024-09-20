import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated, {
  Easing,
  withTiming,
  interpolate,
  ReduceMotion,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface AccordionProps {
  title: string;
  maxHeight?: number;
  rotateEnd?: string;
  rotateStart?: string;
  bodyStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  titleStyle?: TextStyle;
  iconSourceOpen?: string;
  headerStyle?: ViewStyle;
  iconSourceClosed?: string;
  iconViewStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}

const Accordion = ({
  title,
  children,
  bodyStyle,
  iconStyle,
  titleStyle,
  headerStyle,
  iconViewStyle,
  containerStyle,
  iconSourceOpen,
  maxHeight = 100,
  iconSourceClosed,
  rotateStart = "0deg",
  rotateEnd = "180deg",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const height = useSharedValue(0);

  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    height.value = withTiming(isOpen ? maxHeight : 0, {
      duration: 300,
      easing: Easing.linear,
      reduceMotion: ReduceMotion.System,
    });
  }, [isOpen, height, maxHeight]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    height: height.value,
    overflow: "hidden",
  }));

  const animatedIconStyle = useAnimatedStyle(() => {
    const rotateStartNum = parseFloat(rotateStart) || 0;
    const rotateEndNum = parseFloat(rotateEnd) || 180;

    return {
      transform: [
        {
          rotate: `${interpolate(
            height.value,
            [0, maxHeight],
            [rotateStartNum, rotateEndNum]
          )}deg`,
        },
      ],
    };
  });

  return (
    <View
      style={[styles.container, bodyStyle, { borderWidth: isOpen ? 0 : 1 }]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={toggleAccordion}
        style={[styles.header, headerStyle]}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Animated.View style={[styles.icon, iconViewStyle, animatedIconStyle]}>
          {iconSourceOpen || iconSourceClosed ? (
            <Image
              style={[styles.iconImage, iconStyle]}
              source={isOpen ? iconSourceOpen : iconSourceClosed}
            />
          ) : null}
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.body,
          animatedContainerStyle,
          { marginTop: isOpen ? 3 : 0 },
          containerStyle,
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginVertical: 8,
    overflow: "hidden",
    borderColor: "#ddd",
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 15,
    height: 15,
  },
  body: {
    backgroundColor: "#f7f7f7",
  },
});

export default Accordion;
