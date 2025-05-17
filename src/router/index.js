import { createRouter, createWebHistory } from 'vue-router';
import memberRoutes from './rMember.js';
import groupRoutes from './rGroup.js';
import zoneRoutes from './rZone.js';

const routes = [
  ...memberRoutes,
  ...groupRoutes,
  ...zoneRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;