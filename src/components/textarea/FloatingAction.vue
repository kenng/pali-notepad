<template lang="pug">
.iw-com-fab
    q-page-sticky(
        v-for='fab of fabs'
        :key='fab.label'
        position="bottom-right"
        :offset="fab.offset")
        q-fab(
            v-model='fab.isToggled',
            color='amber',
            text-color='black',
            icon='keyboard_arrow_left',
            direction='left'
            :persistent='true'
            :label='fab.label'
            )
            q-fab-action(
                v-for='letter of fab.items'
                color='amber',
                text-color='black',
                @click='() => $emit("click", letter)',
                :label='letter',
            )

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { tilde, overdot, underdot } from 'src/utils/pali-keyboard';

export default defineComponent({
    name: 'FloatingAction',
    mixins: [],
    components: {},
    props: {},
    data: function() {
        return {
            fabs: {
                overdot: {
                    isToggled: true,
                    label: 'OverDot',
                    offset: [18, 130],
                    items: overdot,
                },
                tilde: {
                    isToggled: true,
                    label: 'Tilde',
                    offset: [18, 70],
                    items: tilde,
                },
                underdot: {
                    isToggled: true,
                    label: 'UnderDot',
                    offset: [18, 10],
                    items: underdot,
                },
            },
        };
    },
    watch: {},
    computed: {},
    created: function() {},
    mounted: function() {},
    methods: {
        onClick: function(value) {},
    },
});
</script>

<style></style>
