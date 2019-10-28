<template>
    <v-content>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="8" lg="8">
                        <v-row align="center" justify="center" v-if="data.config.showLogo">
                            <v-img :src="logo" max-width="100px" position="center" class="logo"></v-img>
                        </v-row>
                        <v-row align="center" justify="center" v-if="data.config.formTitle">
                            <v-col cols="12" class="text-center">
                                <h1 class="darken--text">{{ data.config.formTitle }}</h1>
                            </v-col>
                        </v-row>
                        <v-row align="center" justify="center" v-if="data.config.formDescription">
                            <v-col cols="12" class="text-center">
                                <p class="darken--text">{{ data.config.formDescription }}</p>
                            </v-col>
                        </v-row>
                        <v-row v-if="sent">
                            <v-col>
                                <v-alert v-model="sent" color="primary" outlined dismissible>
                                    Your message has been sent successfully!
                                </v-alert>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col v-for="item in data.form.fields" cols="12" sm="12"
                                   :md="item.width === 'half' ? 6 : 12">
                                <v-text-field
                                        v-if="item.type === 'text'"
                                        :rules="item.required ? ruleRequired : []"
                                        :name="item.name"
                                        :label="item.label"
                                        :color="data.config.color"
                                        v-model="item.value"
                                        outlined clearable hide-details>
                                </v-text-field>
                                <v-select
                                        v-if="item.type === 'select'"
                                        :rules="item.required ? ruleRequired : []"
                                        :name="item.name"
                                        :label="item.label"
                                        :color="data.config.color"
                                        v-model="item.value"
                                        :items="item.options"
                                        item-value="value"
                                        item-text="text"
                                        outlined clearable hide-details>
                                </v-select>
                                <v-textarea
                                        v-if="item.type === 'textarea'"
                                        :rules="item.required ? ruleRequired : []"
                                        :name="item.name"
                                        :label="item.label"
                                        :color="data.config.color"
                                        v-model="item.value"
                                        outlined clearable hide-details auto-grow>
                                </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="4" offset-sm="4" class="text-center">
                                <v-btn large color="primary" @click="sendForm" :loading="loader" :disabled="loader"
                                       block>
                                    Send
                                    <template v-slot:loader>
                                        <span class="custom-loader">
                                          <v-icon light>mdi-cached</v-icon>
                                        </span>
                                    </template>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-content>
</template>

<script>
    export default {
        props: {
          data: {
              type: Object,
              required: true
          }
        },
        data: () => ({
            valid: true,
            loader: null,
            sent: false,
            ruleRequired: [
                value => !!value || "Required."
            ],
            logo: require('../assets/logo.png')
        }),
        methods: {
            sendForm() {
                if (this.$refs.form.validate()) {
                    this.sent = false
                    this.loader = true
                    setTimeout(() => (this.loader = false, this.$refs.form.reset(), this.sent = true), 2000)
                }
            }
        }
    };
</script>

<style scoped>
    .logo {
        margin: 20px;
        text-align: center;
    }

    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }

    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>