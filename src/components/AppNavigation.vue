<template>
    <div>
        <v-app-bar app clipped-right :color="configData.color" dark elevate-on-scroll>
            <v-toolbar-title>Vue Dynamic Form</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-app-bar-nav-icon @click.stop="right = !right"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="right" fixed right temporary>
            <v-list dense>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Close</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            right: false,
            configData: {
                color: "primary"
            }
        }),
    };
</script>
