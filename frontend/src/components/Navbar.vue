<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isBelowProfile = ref(false)

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const handleScroll = () => {
  const profileEl = document.getElementById('profile')
  if (!profileEl) return

  const profileTop = profileEl.getBoundingClientRect().top
  isBelowProfile.value = profileTop <= 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// --- 💡 クラス系まとめてcomputedに
const headerClass = computed(() =>
  `fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300 ${
    isBelowProfile.value ? 'bg-white' : 'bg-blue-600'
  }`
)

const textClass = computed(() =>
  isBelowProfile.value ? 'text-blue-600' : 'text-white'
)
</script>

<template>
  <header :class="headerClass">
    <nav class="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
      <!-- ロゴ -->
      <h1>
        <a href="#description" :class="['nav-link font-bold hover:underline', textClass]">
          My Portfolio<br>Atsuya Nishiyama
        </a>
      </h1>

      <!-- ハンバーガー（モバイルのみ） -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none" :class="textClass">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- メニュー（PC表示） -->
      <ul class="hidden md:flex md:space-x-6">
        <li><a href="#profile" :class="['nav-link font-bold hover:underline', textClass]">PROFILE</a></li>
        <li><a href="#history" :class="['nav-link font-bold hover:underline', textClass]">HISTORY</a></li>
        <li><a href="#skills" :class="['nav-link font-bold hover:underline', textClass]">SKILLS</a></li>
        <li><a href="#contact" :class="['nav-link font-bold hover:underline', textClass]">CONTACT</a></li>
      </ul>
    </nav>

    <!-- メニュー（モバイル表示） -->
    <ul
      v-if="menuOpen"
      class="md:hidden flex flex-col items-center justify-center space-y-4 px-4 pb-4 bg-inherit transition-all duration-300"
    >
      <li><a href="#profile" @click="menuOpen = false" :class="['nav-link font-bold hover:underline', textClass]">PROFILE</a></li>
      <li><a href="#history" @click="menuOpen = false" :class="['nav-link font-bold hover:underline', textClass]">HISTORY</a></li>
      <li><a href="#skills" @click="menuOpen = false" :class="['nav-link font-bold hover:underline' , textClass]">SKILLS</a></li>
      <li><a href="#contact" @click="menuOpen = false" :class="['nav-link font-bold hover:underline', textClass]">CONTACT</a></li>
    </ul>
  </header>
</template>


<style scoped lang="postcss">
.nav-link {
  @apply transition-colors duration-200;
}
</style>
