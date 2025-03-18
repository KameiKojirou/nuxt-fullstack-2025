<script setup lang="ts">
    import { NuxtLink } from '#components';
    import { navLinks } from '~/utils/navLinks';
</script>

<template>
    <div class="flex flex-row justify-between items-center p-4">
        <nav class="flex flex-row gap-4 ">
            <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.path">{{ link.label }}</NuxtLink>
        </nav>
        <MenuButton />
    </div>
</template>