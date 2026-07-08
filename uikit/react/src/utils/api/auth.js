// @project
import { AUTH_USER_KEY } from '@/config';
import { attempt } from '@/utils/attempt';
import axiosServices from '@/utils/axios';

export async function ssoLogin(payload) {
  const { data: axiosResponse, error } = await attempt(axiosServices.post('/auth/login', payload));
  if (error) return { data: null, error };
  return { data: axiosResponse?.data ?? null, error: null };
}

export async function getUser() {
  const { data: axiosResponse, error } = await attempt(axiosServices.get('/auth/me'));
  if (error) return { data: null, error };
  return { data: axiosResponse?.data ?? null, error: null };
}

export async function logout() {
  const { error } = await attempt(axiosServices.post('/auth/logout'));
  localStorage.removeItem(AUTH_USER_KEY);
  const logoutUrl = 'https://codedthemes.com/wp-json/builderapi/v1/logout?redirect=https://www.saasable.io';
  window.location.href = logoutUrl;

  return { data: { message: 'Logged out' }, error: error ?? null };
}
