<template>
	<v-row>
		<v-col
			v-for="item in formSpecification.fields"
			:key="item.name"
			cols="12"
			sm="12"
			:md="item.width === 'half' ? 6 : 12"
		>
			<v-text-field
				v-if="item.type === 'text'"
				v-model="item.value"
				:rules="item.required ? ruleRequired : []"
				:name="item.name"
				:label="item.label"
				:color="configData.color"
				outlined
				clearable
				hide-details
			/>
			<v-text-field
				v-if="item.type === 'email'"
				v-model="item.value"
				:rules="item.required ? ruleRequired.concat(ruleEmail) : ruleEmail"
				:name="item.name"
				:label="item.label"
				:color="configData.color"
				outlined
				clearable
				hide-details
			/>
			<v-select
				v-if="item.type === 'select'"
				v-model="item.value"
				:rules="item.required ? ruleRequired : []"
				:name="item.name"
				:label="item.label"
				:color="configData.color"
				:items="item.options"
				item-value="value"
				item-text="text"
				outlined
				clearable
				hide-details
			/>
			<v-textarea
				v-if="item.type === 'textarea'"
				v-model="item.value"
				:rules="item.required ? ruleRequired : []"
				:name="item.name"
				:label="item.label"
				:color="configData.color"
				outlined
				clearable
				hide-details
				auto-grow
			/>
		</v-col>
	</v-row>
</template>
<script>
export default {
	props: {
		formSpecification: {
			type: Object,
			default: () => {},
		},
		configData: {
			type: Object,
			default: () => {},
		},
	},
	data: () => ({
		ruleRequired: [
			value => !!value || 'Required.',
		],
		ruleEmail: [
			v => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || !v) || 'E-mail must be valid',
		],
	}),
};
</script>
