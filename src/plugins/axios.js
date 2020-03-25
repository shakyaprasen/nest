/*eslint-disable*/

import ax from 'axios';

const httpAxios = ax.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
  timeout: 1000,
  headers: { token: window.localStorage.getItem('token') },
});

// insert all your axios logic here

export const VueAxios = httpAxios;

export default {
  install(Vue, options) {
    Vue.prototype.$axios = httpAxios;
  },
};

/* eslint-enable */
