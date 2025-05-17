<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-6">Editar Grupo</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold mb-2">Nombre</label>
          <input type="text" id="name" v-model="group.name" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required>
        </div>
        <div class="mb-4">
          <label for="lastname" class="block text-gray-700 font-semibold mb-2">Dirección</label>
          <input type="text" id="lastname" v-model="group.address" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required>
        </div>

        <div class="mb-4">
           <label for="zone_id" class="block text-gray-700 font-semibold mb-2">Zona</label>
           
           <select name="zone_id" id="zone_id" v-model="group.zone_id">
             <option value="">Selecciona Una Zona</option>
             <option :value="zone.id" v-for="zone in store.zones" :key="zone.id">{{ zone.name }}</option>
           </select>
         </div>

        <router-link to="/groups" class="w-50  bg-blue-500 text-white py-3 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-4"> Cancelar </router-link>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-40">Guardar</button>
      </form>
    </div>
  </div>
</template>


<script setup>

import { useRoute, useRouter } from 'vue-router';
import {useGroupStore} from '../../stores/groupStore.js'
const store = useGroupStore()
const route = useRoute()
const router = useRouter()
const id = route.params.id

let group = {
    name: '',
    address: '',
    zone_id: ''
}


group = { ...store.getGroup(id)}


const handleSubmit = () => {
  const index = store.getGroupIndex(id)
  store.update(index,group)
  
  router.push('/groups')
};


</script>

