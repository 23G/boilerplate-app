import React from 'react';
import { Text, View } from 'react-native';
import Config from 'react-native-config';
import { useTailwind } from 'tailwind-rn';

export const HomeScreen = () => {
    const tw = useTailwind();

    return (
        <View style={tw('flex-1 items-center justify-center')}>
            <Text style={tw('text-xl mb-2')}>Home</Text>
            <Text style={tw('text-lg')}>ENV: {Config.ENV}</Text>
        </View>
    );
};
