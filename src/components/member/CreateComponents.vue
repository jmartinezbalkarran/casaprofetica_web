<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-6">Nuevo Miembro</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold mb-2">Nombre</label>
            <input type="text" id="name" v-model="member.name" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required>
          </div>
          <div class="mb-4">
            <label for="lastname" class="block text-gray-700 font-semibold mb-2">Apellido</label>
            <input type="text" id="lastname" v-model="member.lastname" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required>
          </div>

          <div class="mb-4">
            <label for="card" class="block text-gray-700 font-semibold mb-2">Cédula</label>
            <input type="text" id="card" v-model="member.card" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required>
          </div>
          <div class="mb-4">
            <label for="group_id" class="block text-gray-700 font-semibold mb-2">Grupo de conquista</label>
            
            <select name="group_id" id="group_id" v-model="member.group_id">
              <option value="">Selecciona Un Grupo</option>
              <option :value="group.id" v-for="group in store.groups" :key="group.id">{{ group.name }}</option>

            </select>

          </div>
          <router-link to="/members" class="w-50  bg-blue-500 text-white py-3 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-4"> Cancelar </router-link>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-40">Guardar</button>
        </form>
       
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { useMemberStore } from '../../stores/memberStore'
  import { useRoute, useRouter } from 'vue-router';
  

  
  const store = useMemberStore()
  const router = useRouter()
  
  const member = {
    name: '',
    lastname: '',
    card: '',
    group_id: ''
  }


  const handleSubmit = () => {
   store.create(member) 
   router.push('/members')
  }
  



  /* import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute()
  const router = useRouter()
  const groups = ref({
    id:'',
    name:''
  })
  const member = ref({
    name: '',
    lastname: '',
    card: '',
    group_id: ''
  })

  onMounted(()=>{
    fetch('http://localhost:30002/groups')
    .then((res)=> res.json())
    .then((res)=> groups.value = res.data)
    
  })
  
  
  const handleSubmit = () => {
    member.value.group_id = member.value.group_id.toString()
   
    fetch('http://localhost:30002/members',{
        method:'POST',

        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(member.value)
    })
    
    router.push('/members')
   
  };
  
   */
  </script>

  
 