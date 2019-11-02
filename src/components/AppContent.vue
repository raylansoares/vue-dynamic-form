<template>
	<v-content>
		<v-container fluid>
			<v-row
				align="center"
				justify="center"
			>
				<v-col
					cols="12"
					sm="8"
					md="8"
					lg="8"
				>
					<v-form
						ref="form"
						v-model="valid"
						lazy-validation
					>
						<v-row
							v-if="data.config.showLogo"
							align="center"
							justify="center"
						>
							<v-img
								:src="logo"
								max-width="100px"
								position="center"
								class="logo"
							/>
						</v-row>
						<v-row
							v-if="data.config.formTitle"
							align="center"
							justify="center"
						>
							<v-col
								cols="12"
								class="text-center"
							>
								<h1 class="darken--text">
									{{ data.config.formTitle }}
								</h1>
							</v-col>
						</v-row>
						<v-row
							v-if="data.config.formDescription"
							align="center"
							justify="center"
						>
							<v-col
								cols="12"
								class="text-center"
							>
								<p class="darken--text">
									{{ data.config.formDescription }}
								</p>
							</v-col>
						</v-row>
						<v-row v-if="sent">
							<v-col
								cols="12"
								class="pb-0"
							>
								<v-alert
									v-model="sent"
									color="primary"
									outlined
									dismissible
								>
									{{ data.config.successMessage || 'Your message has been sent successfully!' }}
								</v-alert>
							</v-col>
						</v-row>
						<v-row>
							<v-col
								cols="12"
								class="text-center"
							>
								<AppFormRenderer
									:form-specification="data.form"
									:config-data="data.config"
								/>
							</v-col>
						</v-row>
						<v-row>
							<v-col
								cols="12"
								sm="4"
								offset-sm="4"
								class="text-center"
							>
								<v-btn
									large
									block
									color="primary"
									:loading="loader"
									:disabled="loader"
									@click="sendForm"
								>
									Send
									<template v-slot:loader>
										<span class="custom-loader">
											<v-icon light>mdi-cached</v-icon>
										</span>
									</template>
								</v-btn>
							</v-col>
						</v-row>
					</v-form>
				</v-col>
			</v-row>
		</v-container>
	</v-content>
</template>

<script>
import AppFormRenderer from './AppFormRenderer.vue';

export default {
	components: {
		AppFormRenderer,
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		valid: true,
		loader: null,
		sent: false,
		logo: 'img/logo.png',
	}),
	methods: {
		sendForm() {
			if (this.$refs.form.validate()) {
				this.sent = false;
				this.loader = true;
				setTimeout(() => (this.loader = false, this.$refs.form.reset(), this.sent = true), 2000);
			}
		},
	},
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
