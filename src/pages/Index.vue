<template lang="pug">
.iw-page
    TextArea

    Footer(repo='https://github.com/kenng/pali-easy-input')
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TextArea from 'src/components/textarea/QEditor.vue';
import Footer from 'src/components/Footer.vue';

export default defineComponent({
    name: 'Index',
    mixins: [],
    components: {
        TextArea,
        Footer,
    },
    props: {},
    data: function() {
        return {};
    },
    watch: {},
    computed: {},
    created: function() {},
    mounted: function() {},
    methods: {},
});
</script>

<style></style>
