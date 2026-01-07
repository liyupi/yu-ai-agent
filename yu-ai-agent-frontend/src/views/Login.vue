<template>
  <div class="login-container">
    <div class="form-card">
      <h2 class="title">登录</h2>
      <div class="form-item">
        <label>账号</label>
        <input v-model="form.userAccount" type="text" placeholder="请输入账号" />
      </div>
      <div class="form-item">
        <label>密码</label>
        <input v-model="form.userPassword" type="password" placeholder="请输入密码" />
      </div>
      <div class="btn-group">
        <button class="primary-btn" @click="handleSubmit">登录</button>
        <button class="secondary-btn" @click="$router.push('/register')">去注册</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { userLogin } from '../api/user'

const router = useRouter()
const form = reactive({
  userAccount: '',
  userPassword: ''
})

const handleSubmit = async () => {
  if (!form.userAccount || !form.userPassword) {
    alert('请输入账号和密码')
    return
  }
  try {
    const res = await userLogin(form)
    if (res.code === 0) {
      alert('登录成功')
      localStorage.setItem('user', JSON.stringify(res.data))
      router.push('/')
    } else {
      alert('登录失败: ' + res.message)
    }
  } catch (error) {
    console.error(error)
    alert('登录失败')
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #111122;
  color: #fff;
  background-image: 
    linear-gradient(0deg, rgba(8, 17, 34, 0.9), rgba(5, 8, 20, 0.9));
}
.form-card {
  width: 400px;
  padding: 40px;
  background: rgba(17, 23, 41, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(0, 240, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
}
.title {
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Orbitron', sans-serif;
  color: #00f0ff;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
}
.form-item {
  margin-bottom: 20px;
}
.form-item label {
  display: block;
  margin-bottom: 8px;
  color: rgba(255,255,255,0.8);
}
.form-item input {
  width: 100%;
  padding: 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  color: #fff;
  outline: none;
  transition: border-color 0.3s;
}
.form-item input:focus {
  border-color: #00f0ff;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 10px;
}
.primary-btn {
  flex: 2;
  background: linear-gradient(90deg, #0088ff, #00b2ff);
  border: none;
  padding: 12px 20px;
  color: white;
  border-radius: 4px;
  font-weight: bold;
}
.primary-btn:hover {
  box-shadow: 0 0 15px rgba(0, 178, 255, 0.5);
}
.secondary-btn {
  flex: 1;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 12px 20px;
  color: rgba(255,255,255,0.8);
  border-radius: 4px;
}
.secondary-btn:hover {
  border-color: #00f0ff;
  color: #00f0ff;
}
</style>
