import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reader from './views/Reader.vue'
import Read from './views/Read.vue'
import Redirect from './views/Redirect.vue'
// import MsgIpProtection from './components/MsgIpProtection.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Set in Block - Immutable and Indestructible Messages on the Blockchain',
        metaTags: [
          {
            name: 'description',
            content: 'Create and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and "set in stone" it on the blockchain.'
          },
          {
            property: 'og:description',
            content: 'Create and read everlasting messages on the blockchain. Make a permanent promise, create a proof of fact, bypass censorship. Enter a message and "set in stone" it on the blockchain.'
          }
        ]
      }
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: Redirect,
    },
    {
      path: '/reader',
      name: 'reader',
      component: Reader,
      meta: {
        title: 'Set in Block - Blockchain Message Reader',
        metaTags: [
          {
            name: 'description',
            content: 'Read everlasting messages on the Ethereum blockchain.'
          },
          {
            property: 'og:description',
            content: 'Read everlasting messages on the Ethereum blockchain.'
          }
        ],
        // children: [
        //   {
        //     // UserProfile will be rendered inside User's <router-view>
        //     // when /user/:id/profile is matched
        //     path: '/reader/:txHash',
        //     component: Read,
        //     props: true,
        //     meta: {
        //       title: 'Set in Block - Immutable message, permanently recorded on the blockchain',
        //     }
        //   },
        // ]
      }
    },
    {
      path: '/reader/:txHash',
      name: 'read',
      component: Read,
      props: true,
      meta: {
        title: 'Set in Block - Immutable message, permanently recorded on the blockchain',
      }
    },
    {
      path: '/intellectual-property-copyright-protection',
      name: 'msgIpProtection',
      component: Home,
      props: true,
      meta: {
        title: 'Set in Block - Intellectual Property and Copyright Protection',
        metaTags: [
          {
            name: 'description',
            content: 'You can create a proof of existence for your authentic work, e.g. design, musical composition, code, movie script or anything else that can be considered as intellectual property.'
          },
          {
            property: 'og:description',
            content: 'You can create a proof of existence for your authentic work, e.g. design, musical composition, code, movie script or anything else that can be considered as intellectual property.'
          }
        ]
      }
    },
    {
      path: '/permanent-text-message-on-the-blockchain',
      name: 'msgPlainText',
      component: Home,
      props: true,
      meta: {
        title: 'Set in Block - Write a permanent text message on the Ethereum blockchain',
        metaTags: [
          {
            name: 'description',
            content: 'A message you add to the Ethereum blockchain will stay there permanently.'
          },
          {
            property: 'og:description',
            content: 'A message you add to the Ethereum blockchain will stay there permanently.'
          }
        ]
      }
    },
    {
      path: '/:txHash',
      name: 'read2',
      component: Read,
      props: true,
      meta: {
        title: 'Set in Block - Immutable message, permanently recorded on the blockchain',
      }
    }
  ]
})
