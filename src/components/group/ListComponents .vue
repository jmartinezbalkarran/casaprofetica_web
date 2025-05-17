<template>

    <div class="bg-slate-950 p-2 pt-0 flex justify-center">
      <router-link to="/groups/create" class="w-full h-10 rounded-ss-full p-2 mt-0 border-2 text-center bg-slate-900 hover:bg-slate-700 text-white font-bold">Agregar</router-link>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 text-center">
        
        <thead class=" bg-slate-950">
          <tr>
            <th scope="col" class="px-4 py-3 text-center text-xs font-bold text-gray-100 uppercase tracking-wider ">
              Nombre
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-bold  text-gray-100 uppercase tracking-wider ">
              Dirección
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-bold  text-gray-100 uppercase tracking-wider ">
              Zona
            </th>
            <th scope="col" class="px-4 py-3 text-center text-xs font-bold  text-gray-100 uppercase tracking-wider ">
              Utilidades
            </th>
          </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200 ">
          <tr v-for="group in store.groups" :key="group.id">
            <td class="px-6 py-4 whitespace-nowrap text-justify">{{group.name}}</td>
            <td class="px-6 py-4 whitespace-nowrap ">{{group.address}}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{store.getZoneName(group.zone_id)}}</td>
            <td class="px-6 py-4 whitespace-nowrap">
            <router-link :to="`/groups/${group.id}/show`"  class="bg-green-700 hover:bg-green-400 text-white h-10 font-bold py-2 px-4 rounded mr-2">Ver</router-link>
            <router-link :to="`/groups/${group.id}/edit`" class="bg-blue-700 hover:bg-blue-400 text-white h-10 font-bold py-2 px-4 rounded mr-2">Editar</router-link>
            <router-link  to="" @click="openModal(group.id)" class="bg-red-700 hover:bg-red-400 text-white h-10 font-bold py-2 px-4 rounded mr-2">Eliminar</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-red-600" id="modal-title">
                !! Eliminar Registro !!
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500 font-bold">
                  ¿ Esta seguro que desea Eliminar El Grupo de Conquista {{modalGroup.name}}?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="hideModal" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Cerrar
          </button>
          <button @click="confirm(modalGroup.id)" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref } from 'vue'
import {useGroupStore} from '../../stores/groupStore.js'
const store = useGroupStore()

const showModal = ref()
const modalGroup = ref({})



const openModal = (id) => {
  modalGroup.value = store.getGroup(id)
  showModal.value = true
 
}

const hideModal = () => {
  showModal.value = false
}

const confirm = (id) => {
  store.deleteGroup(id)
  showModal.value = false
 
}

</script>