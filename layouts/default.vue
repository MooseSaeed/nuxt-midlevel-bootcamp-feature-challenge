<script setup></script>

<template>
  <div class="min-h-screen font-sans antialiased relative text-white pb-28 xs:pb-10">
    <Navbar />
    <main class="min-h-[80vh] mt-20 xs:mt-0 flex justify-center items-center">
      <slot />
    </main>
  </div>
</template>
