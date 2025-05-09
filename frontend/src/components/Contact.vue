<template>
    <section class="px-4 py-20 bg-gray-100 text-center">
      <h2 class="text-3xl font-bold text-blue-600 mb-8">コンタクト</h2>
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-cols items-center justify-center">
            <label for="name">名前</label>
            <input v-model="form.name" type="text" id="name" class="bg-gray-400" required />
          </div>
          <div class="flex flex-cols items-center justify-center">
            <label for="email">メールアドレス</label>
            <input v-model="form.email" type="email" id="email" required />
          </div>
          <div>
            <label for="message">メッセージ</label>
            <textarea v-model="form.message" id="message" required></textarea>
          </div>
          <button type="submit">送信</button>
          <div v-if="success">送信成功！</div>
          <div v-if="error" style="color: red;">{{ error }}</div>
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
