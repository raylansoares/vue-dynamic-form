<template>
        <v-row>
           <v-col
                v-for="item in formSpecification.fields"
                cols="12"
                sm="12"
                :md="item.width === 'half' ? 6 : 12"
            >
                <v-text-field
                    v-if="item.type === 'text'"
                    :rules="item.required ? ruleRequired : []"
                    :name="item.name"
                    :label="item.label"
                    :color="configData.color"
                    v-model="item.value"
                    outlined clearable hide-details>
                </v-text-field>
                <v-select
                    v-if="item.type === 'select'"
                    :rules="item.required ? ruleRequired : []"
                    :name="item.name"
                    :label="item.label"
                    :color="configData.color"
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
                    :color="configData.color"
                    v-model="item.value"
                    outlined clearable hide-details auto-grow>
                </v-textarea>
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
        ruleRequired: {
            type: Array,
            default: () => [],
        },
        configData: {
            type: Object,
            default: () => {},
        }
    },
}
</script>
