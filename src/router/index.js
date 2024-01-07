import Vue from 'vue';
import VueRouter from 'vue-router';
// import Registration from '@/components/Registration.vue';
import Registration from '@/components/UserRegistration.vue';
import Payment from '@/components/Payment.vue';



Vue.use(VueRouter);

const routes = [
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
