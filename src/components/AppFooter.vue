<template>
	<v-footer
		app
		:color="config.footerColor"
		dark
	>
		<span>
			{{ config.footerLeftText }}
		</span>
		<div class="flex-grow-1" />
		<span>{{ config.footerRightText }}</span>
	</v-footer>
</template>

<script>
export default {
	props: {
		config: {
			type: Object,
			required: true,
		},
	},
	data: () => ({}),
};
</script>
