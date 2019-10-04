<template>
    <v-app id="inspire">
        <AppNavigation/>
        <AppContent/>
        <AppFooter/>
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
            AppContent
        },
        data: () => ({}),
    }
</script>