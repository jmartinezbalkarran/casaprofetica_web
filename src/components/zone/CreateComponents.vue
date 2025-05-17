<template>
   <div class="flex items-center justify-center min-h-screen bg-gray-100">
     <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
       <h2 class="text-2xl font-semibold mb-6">Nuevo Zona</h2>
       <form @submit.prevent="handleSubmit">
         <div class="mb-4">
           <label for="name" class="block text-gray-700 font-semibold mb-2">Nombre</label>
           <input type="text" id="name" v-model="zone.name" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required>
         </div>
         <router-link to="/zones" class="w-50  bg-blue-500 text-white py-3 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-4"> Cancelar </router-link>
         <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-40">Guardar</button>
       </form>
      
     </div>
   </div>
 </template>
 
 
 <script setup>
 import { useZoneStore } from '../../stores/zoneStore'
 import { useRoute, useRouter } from 'vue-router';
 

 
 const store = useZoneStore()
 const router = useRouter()
 
 const zone = {
   name: '',
 }


 const handleSubmit = () => {
  store.create(zone)
  router.push('/zones')
 }
 
 </script>

 
