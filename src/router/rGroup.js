import { createRouter, createWebHistory } from 'vue-router';

import lists from '../components/group/ListComponents .vue'
import Show from '../components/group/ShowComponents.vue'
import Edit from '../components/group/EditComponents.vue'
import Create from'../components/group/CreateComponents.vue'




const routerGroup = [
  { path: '/groups', component: lists },
  { path: '/groups/create', component: Create },
  { path: '/groups/:id/show', component: Show},
  { path: '/groups/:id/edit', component: Edit}
 
];

export default routerGroup;