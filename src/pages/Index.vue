<template lang="pug">
.iw-page
    TextArea

</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TextArea from 'src/components/textarea/QEditor.vue';

export default defineComponent({
    name: 'Index',
    mixins: [],
    components: {
        TextArea,
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
