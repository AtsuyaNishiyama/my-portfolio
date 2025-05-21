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
    detail: '8月 株式会社村田製作所へ入社し、製造部として、\n iPhoneやETCの部品を作成を行う。'
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
    short: '3月 Webを作りたいという思いからNTTデータスマートソーシングを退職\n4月 株式会社スタッフサービスへ入社\n9月 自学習のみで限界を感じ、オンラインスクールを受講',
    detail: '1月 いつも何気なく見ていたWebサイトに対して、自分も作って見たいと思うようになり転職活動を始める。\n3月 NTTデータスマートソーシングを退職する。\n4月 Webフロントエンドエンジニアへの転職活動を行うも、完全未経験でポートフォリオ無しでは難しく、同じIT業界株式会社スタッフサービスへ入社する。\n 9月 自学習のみで限界を感じ、オンラインスクールを受講する。'
  },
  {
    year: '2025年',
    short: '4月 オンラインスクールで学んだ経験を活かし、サイトを作成',
    detail: '4月 オンラインスクールで学んだ経験を活かし、サイトを作成。\n現在 Webフロントエンドエンジニアとして再度就職活動を行う。'
    
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
          class="w-full flex justify-between items-center px-4 py-3 font-semibold text-blue-600 hover:bg-blue-100 transition"
        >
          <span>{{ item.year }}</span>
          <span>
            <svg
              v-if="openIndex === index"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transform rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
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
