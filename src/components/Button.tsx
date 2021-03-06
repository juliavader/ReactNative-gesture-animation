import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// styles

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontFamily: "SFProText-Regular",
        fontSize: 15,
        textAlign: "center",
    }
});



interface ButtonProps {
    variant: "default" | "primary";
    label: "String";
    onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
    const backgroundColor = variant === "primary" ? "#2CB980" : "rgba(12,13,52,0.05)"
    const color = variant === "primary" ? "white" : "#0C0D34"

    return (
        <RectButton
            style={[styles.container, { backgroundColor }]}
            {...{onPress}}
        >
            <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>
    );
};

Button.defaultProps = { variant: "default" };

export default Button;