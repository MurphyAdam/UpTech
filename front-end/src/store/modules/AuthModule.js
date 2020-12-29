import Vue from "vue";
import router from "../../router/index";

export default {
  state: {
    accessToken: localStorage.getItem("access_token") || "",
    user: JSON.parse(localStorage.getItem("user")) || {}
  },
  getters: {
    isLoggedIn: state =>
      !!state.accessToken &&
      !!state.accessToken.match(Vue.prototype.$pattern.jwtToken),
    getToken: state => state.accessToken,
    getUserId: state => state.user._id
  },
  mutations: {
    AUTH_SUCCESS: (state, payload) => {
      localStorage.setItem("access_token", payload.accessToken);
      localStorage.setItem("user", JSON.stringify(payload.user));
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    DESTROY_SESSION: state => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      state.accessToken = "";
      state.user = {};
    },
    UPDATE_TOKEN: (state, accessToken) => {
      state.accessToken = accessToken;
    }
  },
  actions: {
    signIn: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/sign_in", payload)
          .then(res => {
            if (res.status === 200 && res.data.code === 2032) {
              context.commit("AUTH_SUCCESS", {
                accessToken: res.data.accessToken,
                user: res.data.user
              });
              resolve(res);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    signUp: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/sign_up", payload)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    confirmAccount: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/confirm_account", payload)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    forgotPassword: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/forgot_password", payload)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    resetPassword: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/reset_password", payload)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    resendConfirmation: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/auth/resend_confirmation", payload)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    destroySession: context => {
      context.commit("DESTROY_SESSION");
      router.push({ name: "SignIn" });
    },
    updateToken: (context, payload) => {
      context.commit("UPDATE_TOKEN", payload.accessToken);
    }
  }
};