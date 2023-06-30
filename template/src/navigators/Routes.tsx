import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TabRoutes } from '@/navigators/Tabs';

const Stack = createNativeStackNavigator();

export const Routes = () => {
    const [isNavigatorReady, setIsNavigatorReady] = React.useState(false);

    return (
        <NavigationContainer
            onReady={() => {
                setIsNavigatorReady(true);
            }}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Tabs" component={TabRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
