<script setup>
const count = 0;
</script>

<template>
  <NuxtLoadingIndicator />

  <NuxtLayout>
    <div class="saved">Saved ({{ count }})</div>
    <ResetButton />
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
.saved {
  @apply fixed bottom-20 right-10 bg-gradient-to-r to-blue-600 from-blue-700 px-3 py-1 rounded-md font-semibold flex justify-center items-center w-48 gap-2 hover:opacity-100 z-50;
}
</style>
