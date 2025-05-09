<template>
  <!-- 波アニメーション（上向き）-->
  <svg class="block w-full leading-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
    <path fill="#60A5FA" id="wave1" d="M100,10H0V9C49.83,9,50,2,100,2v8Z">
      <animate attributeType="XML" 
              attributeName="d" 
              dur="10s" 
              repeatCount="indefinite" 
              values="
      M100,10H0V9C49.83,9,50,2,100,2v8Z;
      M100,10H0V5.58C50.08,0,50.08,0,100,5.5V10Z;
      M100,10H0V2C49.83,2,50,9,100,9v1Z;
      M100,10H0V5.5C50,10,50,10,100,5.5V10Z;
      M100,10H0V9C49.83,9,50,2,100,2v8Z
      "/>
    </path>
  </svg>
  <section id="skills" class="px-4 py-20 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 text-center">

    <h3 class="text-left font-bold text-white text-4xl pb-8"> ― SKILLS ―</h3>

   <div class="flex justify-center flex-wrap gap-8">
      <div class="flex flex-col items-center justify-center bg-white h-40 w-32 p-2">
          <img src="\public\imgs_skill\HTML5_Logo.png" alt="">
          <p>HTML</p>
      </div>

      <div class="flex flex-col items-center justify-center bg-white h-40 w-32 p-2">
        <img src="\public\imgs_skill\CSS3_logo.png" alt="">
        <p>CSS</p>
      </div>

      <div class="flex flex-col items-center justify-center bg-white h-40 w-32 p-2">
        <img src="\public\imgs_skill\Javascript_logo.png" alt="">
        <p>Javascript</p>
      </div>

      <div class="flex flex-col items-center justify-center bg-white h-40 w-32 p-2">
        <img src="\public\imgs_skill\Tailwind_logo.png" alt="">
        <p>Tailwind</p>
      </div>

      <div class="flex flex-col items-center justify-center bg-white h-40 w-32 p-2">
        <img src="\public\imgs_skill\JQuery_logo.png" alt="">
        <p>JQuery</p>
      </div>

      <div class="flex flex-col items-center justify-center bg-white h-40 w-32 p-2">
        <img src="\public\imgs_skill\Vue_logo.png" alt="">
        <p>Vue</p>
      </div>

      <div class="flex flex-col items-center justify-center bg-white h-40 w-32 p-2">
        <img src="\public\imgs_skill\Firebase_logo.png" alt="" class="w-24 h-28 object-contain">
          <p>Firebase</p>
      </div>

   </div>
  </section>

    <!-- 波アニメーション（下向き）-->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
    <path fill="#2563EB" id="wave-btm" d="M0,0H100V1C50.17,1,50,8,0,8V0Z">
      <animate attributeType="XML" 
      attributeName="d" 
      dur="10s" 
      repeatCount="indefinite" 
      values="
          M0,0H100V1C50.17,1,50,8,0,8V0Z;
          M0,0H100V4.42C49.92,10,49.92,10,0,4.5V0Z;
          M0,0H100V8C50.17,8,50,1,0,1V0Z;
          M0,0H100V4.5C50,0,50,0,0,4.5V0Z;
          M0,0H100V1C50.17,1,50,8,0,8V0Z
          "/>
    </path>
  </svg>
</template>
  