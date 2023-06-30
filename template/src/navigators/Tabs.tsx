import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgProps } from 'react-native-svg';
import { useTailwind } from 'tailwind-rn';

import { HomeScreen } from '@/screens/Home';
import * as Icon from '@/utils/icons';

const Tabs = createBottomTabNavigator();

const icons: { [key: string]: React.FC<SvgProps> } = {
    Home: Icon.Home,
};

const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation, descriptors }) => {
    const insets = useSafeAreaInsets();
    const tw = useTailwind();
    const { t } = useTranslation();

    return (
        <View
            style={{
                ...tw('bg-white border-t border-gray-200'),
                paddingBottom: insets.bottom,
            }}
        >
            <View style={{ ...Platform.select({ ios: tw('h-16'), android: tw('h-20') }) }}>
                <View style={tw('flex-1 flex-row justify-around px-[3%] pt-1')}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;

                        const Icon = route.name in icons ? icons[route.name] : null;

                        return (
                            <React.Fragment key={route.key}>
                                <Pressable
                                    onPress={() => {
                                        const event = navigation.emit({
                                            type: 'tabPress',
                                            target: route.key,
                                            canPreventDefault: true,
                                        });

                                        if (!isFocused && !event.defaultPrevented) {
                                            navigation.navigate(route.name);
                                        }
                                    }}
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? { selected: true } : {}}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                >
                                    <View
                                        style={tw(
                                            'relative w-14 h-12 mt-4 flex items-center justify-center',
                                        )}
                                    >
                                        <View
                                            style={tw(`
                                               ${isFocused ? 'opacity-100' : 'opacity-40'}
                                               items-center justify-center`)}
                                        >
                                            {Icon && (
                                                <Icon
                                                    width={22}
                                                    height={22}
                                                    fill={
                                                        isFocused
                                                            ? (tw('text-red-500').color as string)
                                                            : (tw('text-black').color as string)
                                                    }
                                                />
                                            )}

                                            <Text
                                                style={tw(
                                                    `${
                                                        isFocused ? 'text-red-500' : 'text-black'
                                                    } mt-2 text-base`,
                                                )}
                                            >
                                                {t(`tabs.${route.name.toLowerCase()}`)}
                                            </Text>
                                        </View>
                                    </View>
                                </Pressable>
                            </React.Fragment>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

export const TabRoutes = () => {
    return (
        <Tabs.Navigator
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen name={'Home'} component={HomeScreen} />
        </Tabs.Navigator>
    );
};
