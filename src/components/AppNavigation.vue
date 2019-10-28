<template>
    <div>
        <v-app-bar app clipped-right :color="config.headerColor" dark elevate-on-scroll>
            <v-toolbar-title>{{ config.headerLeftText }}</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-toolbar-title>{{ config.headerRightText }}</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        props: {
            config: {
                type: Object,
                required: true
            }
        },
        data: () => ({}),
    };
</script>
