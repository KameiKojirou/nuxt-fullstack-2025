<script lang="ts" setup>
    import NavBar from '../components/NavBar.vue'
</script>

<template>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
        <!-- Page content here -->
            <NavBar />
            <NuxtPage />
  </div>
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <SideBarNav />
    </ul>
  </div>
</div>
</template>