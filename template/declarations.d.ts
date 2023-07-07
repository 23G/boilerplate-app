declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';

    const content: React.FC<SvgProps>;

    export default content;
}

declare module '*.png' {
    import { FastImageProps } from 'react-native-fast-image';

    const value: number | FastImageProps.Source;

    export default value;
}

declare module 'react-native-config' {
    import Config from 'react-native-config';
    
    import { Environment } from '@/types/environment';

    interface NativeConfig {
        API_URL: string;
        ENV: Environment,
    }

    const ReactNativeConfig: NativeConfig = Config;

    export default ReactNativeConfig;
}
