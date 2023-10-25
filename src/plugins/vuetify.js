import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import colors from '../content/colors.json';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: colors,
		},
	},
	icons: {
		iconfont: 'mdi', // default - only for display purposes
	},
});
