<template>
    <q-layout view="lhh Lpr lFf">
        <q-header>
            <q-toolbar>
                <!-- <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen"
                /> -->

                <q-toolbar-title>
                    Pali Notepad
                </q-toolbar-title>

                <div>
                    <q-btn flat :icon="help_center" @click="onHelpClicked">
                    </q-btn>
                </div>
                <div>{{ version }}</div>
            </q-toolbar>
        </q-header>

        <!-- <q-drawer
            v-model="leftDrawerOpen"
            bordered
            content-class="bg-grey-1"
            draggable="false"
        >
            <q-list>
                <q-item-label header class="text-grey-8">
                    Essential Links
                </q-item-label>
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer> -->

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
    {
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
    },
];

import { defineComponent, ref } from '@vue/composition-api';
import TutorialDialog from 'src/components/TutorialDialog.vue';
import { mdiHelpCircle } from '@quasar/extras/mdi-v5';

export default defineComponent({
    name: 'MainLayout',
    components: { EssentialLink },
    setup() {
        const leftDrawerOpen = ref(false);
        const essentialLinks = ref(linksData);

        return {
            leftDrawerOpen,
            essentialLinks,
            help_center: mdiHelpCircle,
            version: process.env.version,
        };
    },
    methods: {
        onHelpClicked: function() {
            this.$q
                .dialog({
                    component: TutorialDialog,
                })
                .onOk(() => {});
        },
    },
});
</script>
