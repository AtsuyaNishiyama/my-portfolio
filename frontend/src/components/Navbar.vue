<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isBelowSkills = ref(false)

const handleScroll = () => {
  const skillsEl = document.getElementById('skills')
  if (!skillsEl) return

  const skillsTop = skillsEl.getBoundingClientRect().top
  isBelowSkills.value = skillsTop <= 100
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
    isBelowSkills.value ? 'bg-white' : 'bg-blue-600'
  }`
)

const textClass = computed(() =>
  isBelowSkills.value ? 'text-blue-600' : 'text-white'
)
</script>

<template>
  <header :class="headerClass">
    <nav class="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
      <h1>
        <a href="#description":class="['nav-link font-bold hover:underline', textClass]">
          My Portfolio<br>AtsuyaNishiyama
        </a>
      </h1>
      <ul class="flex space-x-6">
        <li><a href="#profile" :class="['nav-link font-bold hover:underline', textClass]">PROFILE</a></li>
        <li><a href="#history" :class="['nav-link font-bold hover:underline', textClass]">HISTORY</a></li>
        <li><a href="#skills" :class="['nav-link font-bold hover:underline', textClass]">SKILL</a></li>
        <li><a href="#contact" :class="['nav-link font-bold hover:underline', textClass]">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.nav-link {
  @apply transition-colors duration-200;
}
</style>
