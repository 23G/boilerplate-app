import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Config from 'react-native-config';

import nl from '@/locales/nl';
import { Environment } from '@/types/environment';

const resources = {
    nl: {
        translation: nl,
    },
};

i18n.use(initReactI18next).init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: 'nl',
    debug: Config.ENV !== Environment.Production,
});
