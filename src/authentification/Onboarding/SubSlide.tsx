import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import { Button } from '../../components';

//styles
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center", 
        padding: 30,
        paddingTop: 45,
        width: width, 
        
        
    },
    subtitle: {
        fontFamily: "SFProText-SemiBold",
        fontSize: 24,
        color: "#0C0D34", 
        marginBottom: 12,
        lineHeight: 30, 
        textAlign: "center"
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34", 
        textAlign: "center",
        marginBottom: 30
    } , 
    

})

interface SubSlideProps {
    subtitle: string,
    description: string,
    last?: boolean,
    onPress:()=>void
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
    return (
        <View style={styles.container} >
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button 
                label={last ? "Let's get started": "Next"}
                variant={last ?"primary" :"default"}
                {...{onPress}}

            />
        </View>
    )
};

export default SubSlide;