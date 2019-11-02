<template>
	<v-app id="inspire">
		<AppNavigation
			v-if="data.config.showHeader"
			:config="data.config"
		/>
		<AppContent :data="data" />
		<AppFooter
			v-if="data.config.showFooter"
			:config="data.config"
		/>
	</v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';

import configContent from './content/config.json';
import formContent from './content/form.json';

export default {
	name: 'App',
	components: {
		AppNavigation,
		AppFooter,
		AppContent,
	},
	data: () => ({
		data: {
			config: configContent,
			form: formContent,
		},
	}),
	created() {
		const descEl = document.querySelector('head meta[name="description"]');
		const titleEl = document.querySelector('head title');
		descEl.setAttribute('content', this.data.config.formDescription);
		titleEl.textContent = this.data.config.formTitle;
	},
};
</script>
