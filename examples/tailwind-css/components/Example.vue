<template>
  <div class="example">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-gray-100 dark:bg-gray-900"
    >
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      >
      <div class="px-6 py-4 pb-2">
        <div class="font-bold text-xl mb-2 dark:text-white">
          The Coldest Sunset
        </div>
        <p class="text-gray-700 dark:text-gray-300 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="badge mr-2">#photography</span>
        <span class="badge mr-2">#travel</span>
        <span class="badge">#winter</span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.example > div {
  margin: 0 auto;
}

.badge {
  @apply inline-block bg-gray-200 dark:bg-gray-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;

  &:hover {
    @apply bg-gray-300;
  }
}
</style>
