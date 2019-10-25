import Vue from 'vue'
import VueI18n from 'vue-i18n';
import FlagIcon from 'vue-flag-icon';

Vue.use(VueI18n);
Vue.use(FlagIcon);

const messages = {
    'it': {
        message: {
            hello: 'Ciao Mondo!'
        }
    },
    'gb': {
        message: {
            hello: 'Hello World!'
        }
    },
    'de': {
        message: {
            hello: 'Hallo Welt!'
        }
    }
};

export const i18n = new VueI18n({
    locale: 'it', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});


