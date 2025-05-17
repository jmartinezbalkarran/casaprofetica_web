import { createRouter, createWebHistory } from 'vue-router';

import lists from '../components/zone/ListComponents .vue'
import Show from '../components/zone/ShowComponents.vue'
import Edit from '../components/zone/EditComponents.vue'
import Create from'../components/zone/CreateComponents.vue'




const routerZone = [
  { path: '/zones', component: lists },
  { path: '/zones/create', component: Create },
  { path: '/zones/:id/show', component: Show},
  { path: '/zones/:id/edit', component: Edit}
 
];

export default routerZone;