<template lang="pug">
#iw-com-fab(v-if='!isReadonly')

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
                :color='color',
                :ref='fab.label'
                :text-color='textColor',
                :icon='keyboard_arrow_left',
                direction='left'
                :persistent='true'
                :label='fab.label'
                )
                q-fab-action(
                    v-for='letter of fab.items'
                    :key='letter'
                    :color='color',
                    :text-color='textColor',
                    @click='() => onFabActionClicked(fab, letter)',
                    :label='letter',
                )
    template(v-else)
        #iw-mobile-keys.iw-sticky-bottom.text-center
            .iw-code-block(
                v-if='showKeys'
                v-for='fab of fabs'
                :key='fab.label'
                )
                q-fab-action.q-ma-xs(
                    v-for='letter of fab.items'
                    :key='letter'
                    :color='color',
                    :text-color='textColor',
                    @click='() => onFabActionClicked(fab, letter)',
                    :label='letter',
                )
                sub.iw-code-block-label {{fab.label}}

        .iw-sticky-bottom
            q-btn.fixed-bottom-right(
                unelevated,
                dense,
                :label='label',
                @click='toggleKeys')
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { tilde, overdot, underdot } from 'src/utils/pali-keyboard';
import { mdiChevronLeft } from '@quasar/extras/mdi-v5';

export default defineComponent({
    name: 'FloatingAction',
    mixins: [],
    components: {},
    props: {
        isReadonly: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            showKeys: true,
            label: 'hide keys',
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
    setup: function() {
        return {
            keyboard_arrow_left: mdiChevronLeft,
            color: 'deep-orange-6',
            textColor: 'white',
        };
    },
    methods: {
        onFabActionClicked: function(fab: any, letter: string) {
            this.$emit('click', letter);
            const theFab: any = this.$refs[fab.label];
            if (Array.isArray(theFab)) {
                theFab[0].show();
            } else {
                theFab.show();
            }
        },
        toggleKeys: function() {
            this.showKeys = !this.showKeys;
            this.label = this.showKeys ? 'Hide Keys' : 'Show Keys';
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

@media screen and (max-width: 1023px) {
    #iw-com-fab .q-fab__actions {
        max-width: 60vw;
        padding-right: 22px;
        overflow-y: hidden;
        overflow-x: scroll;
    }

    #iw-mobile-keys {
        bottom: 35px;
    }
}
</style>
