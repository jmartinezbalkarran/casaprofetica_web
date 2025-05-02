<template>
     <!-- <router-link to="/" class="text-gray-300 hover:text-white">Login</router-link> -->
    <nav class="bg-black p-2">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
            <img src="../src/assets/cpi.jpeg" alt="Logo Casa Profética" class="h-20 mr-0 p-0" />
          <div class="text-white font-bold text-3xl">
            Casa Profética J.E.L.R
          </div>
        </div>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/members" class=" text-gray-300 font-bold hover:text-white">Miembro</router-link>
          </li>
          <li>
            <router-link to="#" class="text-gray-300 font-bold hover:text-white">Grupo</router-link>
          </li>
          <li>
            <router-link to="#" class="text-gray-300 font-bold hover:text-white">Zona</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </template>
  
