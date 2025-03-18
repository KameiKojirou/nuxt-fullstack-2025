<template>
  <div>
    <p>x: {{ x }} y: {{ y }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMouse } from '~/composables/example';
 const {x, y} = useMouse();
</script>