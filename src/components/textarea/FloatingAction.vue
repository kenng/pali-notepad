<template lang="pug">
#iw-com-fab
    template(
        v-if='$q.screen.gt.sm'
    )
        q-page-sticky(
            v-for='fab of fabs'
            :key='fab.label'
            position="bottom-right"
            :offset="fab.offset")
            q-fab(
                v-model='fab.isToggled',
                color='amber',
                :ref='fab.label'
                text-color='black',
                :icon='keyboard_arrow_left',
                direction='left'
                :persistent='true'
                :label='fab.label'
                )
                q-fab-action(
                    v-for='letter of fab.items'
                    :key='letter'
                    color='amber',
                    text-color='black',
                    @click='() => onFabActionClicked(fab, letter)',
                    :label='letter',
                )
    template(v-else)
        .iw-sticky-bottom.text-center
            .iw-code-block(v-for='fab of fabs')
                q-fab-action.q-ma-xs(
                    v-for='letter of fab.items'
                    :key='letter'
                    color='amber',
                    text-color='black',
                    @click='() => onFabActionClicked(fab, letter)',
                    :label='letter',
                )
                sub.iw-code-block-label {{fab.label}}

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { tilde, overdot, underdot } from 'src/utils/pali-keyboard';
import { mdiChevronLeft } from '@quasar/extras/mdi-v5';

export default defineComponent({
    name: 'FloatingAction',
    mixins: [],
    components: {},
    props: {},
    data: function() {
        return {
            keyboard_arrow_left: mdiChevronLeft,
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
        onFabActionClicked: function(fab: any, letter: string) {
            this.$emit('click', letter);
            const theFab: any = this.$refs[fab.label];
            theFab.show();
        },
    },
});
</script>

<style>
#iw-com-fab {
    position: relative;
    z-index: 999;
}

#iw-com-fab .q-fab__actions {
    flex-direction: row;
    background: #e2e2e25e;
}

.iw-sticky-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: auto;
}

.iw-code-block {
    position: relative;
    background: #e2e2e25e;
    margin: 2px;
}

.iw-code-block-label {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 10px;
    text-shadow: 0 0 15px #313131c7;
    font-weight: 410;
}

@media screen and (max-width: 599px) {
    #iw-com-fab .q-fab__actions {
        max-width: 60vw;
        padding-right: 22px;
        overflow-y: hidden;
        overflow-x: scroll;
    }
}
</style>
