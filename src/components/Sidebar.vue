<template>
  <div class="absolute md:static top-0 w-full md:w-auto bg-orange-500">
    <div class="md:hidden shadow flex justify-end px-8 py-4">
      <menu-icon v-if="!active" size="2x" class="text-white" @click="toggleNavbar" />
      <x-icon v-else size="2x" class="text-white" @click="closeNavbar" />
    </div>

    <div class="navbar shadow flex w-64 h-screen bg-orange-500 p-8 flex-col items-center content-center text-center font-display"
      :class="{ 'active': active }">
      <div class="h-24 w-24 overflow-hidden bg-white rounded-full">
        <g-image src="~/avatar.jpg" />
      </div>

      <h5 class="text-xl text-white pt-8">Kevin Avila</h5>

      <p class="text-xs text-white pt-4">
        Software developer and general geek
      </p>

      <div class="flex flex-col text-white text-sm pt-8 nav-items">
        <g-link @click="closeNavbar" class="pt-2 hover:text-gray-300" to="/">Home</g-link>
        <g-link @click="closeNavbar" class="pt-2 hover:text-gray-300" to="/about">About</g-link>
        <g-link @click="closeNavbar" class="pt-2 hover:text-gray-300" to="/experience">Experience</g-link>
        <g-link @click="closeNavbar" class="pt-2 hover:text-gray-300" to="/blog">Blog</g-link>
        <g-link @click="closeNavbar" class="pt-2 hover:text-gray-300" to="/contact">Contact me</g-link>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import { MenuIcon, XIcon } from 'vue-feather-icons'

  export default {
    data() {
      return {
        active: false
      }
    },

    components: {
      XIcon,
      MenuIcon
    },

    methods: {
      toggleNavbar() {
        this.active = !this.active
      },

      openNavbar() {
        this.active = true
      },

      closeNavbar() {
        this.active = false
      }
    }
  }
</script>

<style lang="scss">
  .nav-items .active--exact {
    color: #fbd38d;

    &:hover {
      color: #fbd38d;
    }
  }

  .navbar {
    top: 0;
    left: -256px;
    position: absolute;
    transition: left .5s;

    &.active {
      left: 0;
    }

    @media screen and (min-width: 768px) {
      left: 0;
      position: static;
    }
  }
</style>
