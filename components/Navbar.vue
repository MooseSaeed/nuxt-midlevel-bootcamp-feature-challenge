<template>
  <div class="h-16 mb-5">
    <div
      class="w-[98%] h-28 xs:h-16 bg-gradient-to-r to-sky-950/25 from-sky-700/25 rounded-md absolute top-5 left-2/4 -translate-x-[50%]"
    >
      <div class="flex xs:flex-row flex-col justify-center items-center xs:gap-5 h-full w-full font-semibold">
        <NuxtLink class="hover:text-gray-300 hover:underline" to="/"> Homepage </NuxtLink>
        <span class="hidden xs:block">|</span>
        <NuxtLink class="hover:text-gray-300 hover:underline" to="/meals"> Meals </NuxtLink>
        <span class="hidden xs:block">|</span>
        <NuxtLink class="hover:text-gray-300 hover:underline" to="/dashboard"> Dashboard </NuxtLink>
        <span class="hidden xs:block">|</span>
        <NuxtLink class="hover:text-gray-300 hover:underline" to="/forbidden"> Forbidden </NuxtLink>
      </div>
    </div>
  </div>
</template>
