import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  // envia os coockies de autenticação para o backend,
  // sem esta informação não é possivel pegar os dados de autenticação.
  withCredentials: true,
})
