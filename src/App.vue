<template>
  <div id="app">
    <!-- <div id="nav" @mouseover="test()">
      <router-link v-for="tab in tabs" :key=tab.id :to="tab.link" :style="{width: tabWidth}">{{tab.name}}</router-link>
    </div> -->
    <div class="coolnav" @mouseleave="closeAccordion()" :style="styleObject" v-if="show">
      <div :style="{marginRight: '15px'}">
        <navigation-item v-for="(tab, key) in tabs" :key="tab.id" @open-accordion="openAccordion(key)"> {{key}} </navigation-item>
      </div>
      <transition name="ac-content">
        <div v-if="isOpen" class="accordion-content" ref="body">
          <h1>{{contentKey}}</h1>
          <div v-for="tab in tabs[contentKey]" :key="tab.id">
            <router-link :to="tab.link">{{tab.name}}</router-link>
          </div>
        </div>
      </transition>
      <!-- <router-link v-for="tab in tabs" :key=tab.id :to="tab.link" :style="{width: tabWidth}">{{tab.name}}</router-link> -->
    </div>
    <div class="content">
      <transition name="view" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <LoadingOverlay />
    <footer></footer>
  </div>
</template>

<script>

import LoadingOverlay from '@/components/LoadingOverlay'
import NavigationItemVue from './components/NavigationItem.vue';

var debugin = {
  created: function() {
    console.log(this.$data)
  }
}

export default {
  mixins: [debugin],
  data() {
    return {
      tabs: {
        About: [
          {name: 'Home', link: '/'},
          {name: 'About', link: '/about'},
        ],
        Company: [
          {name: 'representative', link: '/'}
        ]
      },
      styleObject: {
        height: '60px',
      },
      contentKey : '',
      isOpen: false,
      show:true
    }
  },
  computed : {
    tabWidth: function(){
      return String(100.0 / this.tabs.length) + '%'
    }
  },
  watch: {
    contentKey() {
      this.$nextTick(function() {
        this.$set(this.styleObject, 'height', (this.isOpen)?this.$refs.body.getBoundingClientRect().height+'px':'60px')
        console.log(this.styleObject.height)
      })
    }
  },
  methods: {
    openAccordion(key) {
      this.contentKey = key
      this.isOpen = true
    },
    closeAccordion() {
      this.isOpen = false
      this.contentKey = ''
    }
  },
  components: {
    LoadingOverlay,
    'navigation-item' : NavigationItemVue
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0 auto;
}
#nav {
  padding: 20px;
  background: #2c3e50;
  /* margin-bottom: 50px; */
  bottom: 0;
  position: fixed;
  width: 100%;
}

#nav a {
  font-weight: 300;
  /* color: #2c3e50; */
  color: #dd5511;
  padding: 20px;
}

#nav a:hover{
  background: hsl(203, 23%, 27%);
  transition: 400ms;
}

a{
  color: white;
}

a.router-link-exact-active {
  font-weight: 800;
  /* color: #42b983; */
  color: #dd5511;
}

footer{
  height: 100px;
}

.coolnav{
  background: #2c3e50;
  color: aquamarine;
  font-weight: bold;
  border-radius: 35px;
  position: fixed;
  top: 4%;
  width: 95%;
  left: calc(2.5%);
  transition: height 500ms cubic-bezier(0.68, -0.55,  0.265, 1.55 );
}

.content{
  margin-top: 100px;
}

.accordion-content::before{
  content: "";
  width:94%;
  border-top: 2px solid white;
  left: calc(3%);
  top: 80px;
  position: fixed;
}

.accordion-content{
  padding: 70px;
}

.view-enter-active, .view-leave-active {
  animation: bounce-in 0.5s;
}

.view-enter, .view-leave-to {
  animation: bounce-in 0.5s reverse;
}

.ac-content-enter-active{
  transition: opacity 0.5s ease 0.2s;
}

.ac-content-enter, .ac-content-leave-to {
  opacity: 0;
}

.accordion-enter-active, .accordion-leave-active {
  transition: opacity 0.5s ease 0.2s;
}

.accordion-enter, .accordion-leave-to {
  opacity: 0;
}

.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

@keyframes bounce-in {
  0%{
    transform: scale(0.5)
  }
  50%{
    transform: scale(1.5)
  }
  100%{
    transform: scale(1.0)
  }
}

</style>
