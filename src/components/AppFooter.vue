<template>
    <v-footer app :color="configData.color" dark>
        <span>Vue dynamic form</span>
        <div class="flex-grow-1"></div>
        <span>&copy; 2019</span>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            configData: {
                color: "darken"
            }
        }),
    };
</script>
