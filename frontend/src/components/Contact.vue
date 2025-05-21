<template>
    <section class="px-4 py-20 bg-gray-100 text-center">
      <h3 class="text-left font-bold text-blue-600 text-4xl pb-8"> ― CONTACT ―</h3>

        <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
          <div class="mb-4">
            <label for="name" class="block text-lg font-medium text-gray-700">名前</label>
            <input v-model="form.name" type="text" id="name" class="w-full p-2 mt-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700" required />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-lg font-medium text-gray-700">メールアドレス</label>
            <input v-model="form.email" type="email" id="email" class="w-full p-2 mt-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700" required />
          </div>

          <div class="mb-4">
            <label for="message" class="block text-lg font-medium text-gray-700">メッセージ</label>
            <textarea v-model="form.message" id="message" class="w-full p-2 mt-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700" required></textarea>
          </div>

          <button type="submit" class="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">送信</button>

          <div v-if="success" class="mt-4 text-green-500">送信成功！</div>
          <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
        </form>

    </section>
  </template>
  
<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const success = ref(false);
const error = ref('');

const handleSubmit = async () => {
  success.value = false;
  error.value = '';

  if (!form.name || !form.email || !form.message) {
    error.value = '全ての項目を入力してください。';
    return;
  }

  try {
    await axios.post('http://localhost:3001/api/contact', form);
    success.value = true;
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (err) {
    error.value = '送信に失敗しました。';
  }
};
</script>
