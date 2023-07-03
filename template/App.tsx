import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { TailwindProvider, useTailwind } from 'tailwind-rn';

import { Routes } from '@/navigators/Routes';
import store from '@/store';

import utilities from './tailwind.json';

const App = () => {
    const tw = useTailwind();

    return (
        <View style={tw('flex-1')}>
            <Routes />
        </View>
    );
};

const AppProviders = () => {
    return (
        <StoreProvider store={store}>
            <TailwindProvider utilities={utilities}>
                <SafeAreaProvider>
                    <App />
                </SafeAreaProvider>
            </TailwindProvider>
        </StoreProvider>
    );
};

export default AppProviders;
