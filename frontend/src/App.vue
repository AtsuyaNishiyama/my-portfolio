<template>
  <div>
    <Navbar />

    <main class="mt-12 space-y-0">
      <section id="description">
        <Description />
      </section>

      <section id="profile">
        <Profile />

        <section id="about">
          <About />
        </section>

        <section id="history">
          <History />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </section>


    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Description from './components/Description.vue'
import Profile from './components/Profile.vue'
import About from './components/About.vue'
import History from './components/History.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script>