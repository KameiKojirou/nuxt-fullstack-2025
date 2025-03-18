<script lang="ts" setup>
  import { closeDrawer } from '~/utils/closeDrawer';
</script>

<template>
       <div class="flex justify-between flex-row gap-2 mb-4">
           <span class="text-lg font-bold">Sidebar</span> <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay btn btn-error">x</label>
        </div>
        <li v-for="link in navLinks" :key="link.label"><NuxtLink :to="link.path" @click="closeDrawer">{{ link.label }}</NuxtLink></li>
</template>