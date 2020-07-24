import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";
import Animated, { multiply } from 'react-native-reanimated';
import Slide from "./Slide";
import SubSlide from "./SubSlide";


const BORDER_RADIUS = 75
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    slider: {
        height: 0.61 * height,
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flexDirection: "row",
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS,

    }
})

const slides = [
    { title: "Relaxed", subtitle: "Find your Outfits", description: "Confused about your outfits ? Don't worry! Find the best outfit here !", color: '#BFEAF5', },
    { title: "Playfull", subtitle: "Hear it first, wear it first", description: "Hating the clothes in your wardRobe? Explore hundreds of outfits ideas", color: '#BEECC4' },
    { title: "Exentric", subtitle: "Your Style, Your way", description: "Create Your individual& unique style and look amazing for the day", color: '#FFE4D9' },
    { title: "Funky", subtitle: "Look Good, Feel good", description: "Discover the latest trends in Fashion and explore your personnality.", color: '#FFDDDD' },

]


const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useValue(0);
    const onScroll = onScrollEvent({ x });
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color),
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    {...{ onScroll }}
                >
                    {slides.map(({ title }, index) => {
                        return <Slide {...{ title }} key={index} right={!!(index % 2)} />
                    })}

                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />

                <Animated.View style={[styles.footerContent, { width: width * slides.length, flex: 1, transform: [{translateX : multiply(x, -1)}]}]}>
                    {slides.map(({ subtitle, description }, index) => {
                        return (
                            <SubSlide
                                last={index === slides.length - 1}
                                {...{ subtitle, description }}
                                onPress={()=>{
                                    if(scroll.current){
                                        scroll.current
                                        .getNode()
                                        .scrollTo({x:width*(index+1), animated: true});
                                    }
                                }}
                            />
                        )
                    })}
                </Animated.View>
            </View>
        </View>
    )
};

export default Onboarding;