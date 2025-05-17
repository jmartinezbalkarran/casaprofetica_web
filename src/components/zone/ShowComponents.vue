<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-16">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="/src/assets/cp.jpeg" alt="Foto del miembro">
      </div>

      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
        <p class="mt-2 text-gray-500">Nombre: {{ zone.name }}</p>
        <div class="mt-4"></div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-4">
    <router-link to="/zones" class="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mr-2">Atrás</router-link>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { useZoneStore } from '../../stores/zoneStore.js';
  const router = useRoute()
  const store = useZoneStore()
  const id = router.params.id
  const zone = store.getZone(id)
  
</script>




