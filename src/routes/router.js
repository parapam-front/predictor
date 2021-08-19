import VueRouter from 'vue-router'
import Question from '@/components/QuestionPage.vue'
import Result from '@/components/Result.vue'

export default new VueRouter({
  routes: [
    {
      path: '',
      name: '2',
      component: Question
    },
    {
      path: '/third',
      name: '3',
      component: Question
    },
    {
      path: '/fourth',
      name: '4',
      component: Question
    },
    {
      path: '/fifth',
      name: '5',
      component: Question
    },
    {
      path: '/sixth',
      name: '6',
      component: Question
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '*', component: Question
    }
  ],
  mode: 'history'
})
