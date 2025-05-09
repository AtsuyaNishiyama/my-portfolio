<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const historyItems = [
  {
    year: '2019年',
    short: '8月 株式会社村田製作所へ入社',
    detail: '8月 株式会社村田製作所へ入社し、製造部として、\n iPhoneやETCの部品を作成を行う'
  },
  {
    year: '2021年',
    short: '4月 株式会社村田製作所を退職 \n 8月 株式会社NTTデータスマートソーシングへ入社',
    detail: '4月 今後も長く働き続けていくことを見据え、身体への負担を考慮して、より安定したデスクワークへの転向を決意し、退職を選択した。\n\n 8月 PCスキルがほとんどなかったため、基礎から学べる環境を求めて、タイピングなどの基本操作を習得しながら働けるチャットサポート業務を行う株式会社NTTデータスマートソーシングへ入社しました。\n\n 業務内容は、停電や配電設備に関する問い合わせに対して、チャットを通じた対応を担当していました。'
  },

  {
    year: '2022年',
    short: '7月 SSVへ昇格し、チャットサポート業務から現場運用者へ',
    detail: '7月 顧客とのチャット対応を行うチャットサポート業務から、チャットセンター全体の運用を担当する現場運用者へと業務内容が変更となりました。\n\n\n 主な業務\nクライアントへの報告資料作成・チャット対応者との月次面談 \n クライアントへの月次会議 \n チャット対応の際のマニュアル作成・修正 \n シフト作成・調整'
  },
  {
    year: '2024年',
    short: '3月 Webを作りたいという思いからNTTデータスマートソーシングを退職\n4月 z株式会社スタッフサービスへ入社',
    detail: 'Vue 3とTailwind CSSを使って動的なUI作成に挑戦。個人開発やチーム開発も経験。'
  },
  {
    year: '2024年',
    short: '実務的スキルを強化中。',
    detail: '転職活動を見据えて、実務に即したコードの書き方や設計、Gitの活用方法などを重点的に学習。'
  }
]
</script>

<template>
  
  <section class="px-4 py-20 bg-gray-100 text-center">
      <h3 class="text-left font-bold text-blue-600 text-4xl pb-8"> ― HISTORY ―</h3>

      <div class="max-w-2xl mx-auto text-left space-y-4">
      <div
        v-for="(item, index) in historyItems"
        :key="index"
        class="border border-blue-200 rounded overflow-hidden"
      >
        <button
          @click="toggle(index)"
          class="w-full text-left px-4 py-3 font-semibold text-blue-600 hover:bg-blue-100 transition"
        >
          {{ item.year }}
        </button>
        <div class="px-4 pb-4 text-gray-700">
          <div class="whitespace-pre-line" v-if="openIndex === index">
            {{ item.detail }}
          </div>
          <div class="whitespace-pre-line text-sm text-gray-500" v-else>
            {{ item.short }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>