<template>
  <div class="max-w-sm m-5 bg-white rounded-xl border overflow-hidden shadow-xl">
    <div class="px-6 py-4">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Card'
}
</script>