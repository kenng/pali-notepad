<template>
    <div id="q-app">
        <router-view />
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import 'src/css/iw.css';

export default defineComponent({
    name: 'App',
});
</script>
