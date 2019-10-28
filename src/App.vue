<template>
    <v-app id="inspire">
        <AppNavigation v-if="data.config.showHeader" :config="data.config"/>
        <AppContent :data="data"/>
        <AppFooter v-if="data.config.showFooter" :config="data.config"/>
    </v-app>
</template>

<script>
    import AppNavigation from './components/AppNavigation';
    import AppFooter from "./components/AppFooter";
    import AppContent from "./components/AppContent";

    export default {
        name: 'App',
        components: {
            AppNavigation,
            AppFooter,
            AppContent,
        },
        data: () => ({
            data: {
                config: require('./content/config'),
                form: require('./content/form.json')
            }
        }),
    }
</script>