<template>
  <section class="px-4 py-20 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 text-center">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <!-- 左側：テキスト -->
      <div class="text-left md:w-3/5 space-y-6">
        <h2 class="text-4xl md:text-5xl font-bold text-white">ATSUYA NISHIYAMA</h2>
        <p class="text-white text-lg leading-relaxed">
          フロントエンドエンジニアを目指しています。<br>
          このサイトはVueとTailwindで制作しました。
        </p>
      </div>

      <!-- 右側：画像 -->
      <div class="md:w-2/5">
        <img src="/profile_pc.png" alt="プロフィール画像" class="w-full max-w-sm mx-auto" />
      </div>
    </div>
  </section>



  <!-- 波アニメーション（下向き）-->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
    <path fill="#60A5FA" id="wave-btm" d="M0,0H100V1C50.17,1,50,8,0,8V0Z">
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
