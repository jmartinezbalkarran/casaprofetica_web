import { createRouter, createWebHistory } from 'vue-router';

import lists from '../components/member/ListComponents.vue'
import Show from '../components/member/ShowComponents.vue'
import Edit from '../components/member/EditComponents.vue'
import Create from'../components/member/CreateComponents.vue'




const routerMember = [
  { path: '/members', component: lists },
  { path: '/members/create', component: Create },
  { path: '/members/:id/show', component: Show},
  { path: '/members/:id/edit', component: Edit}
 
];

export default routerMember;