import {Notification} from 'element-ui';
import types          from './types';


export default {
  [types.ACTION.LOGIN]({commit}, user) {
    commit(types.MUTATION.STORE_LOGIN_STATE, user);
  },
  [types.ACTION.LOGOUT]({commit}) {
    commit(types.MUTATION.STORE_LOGIN_STATE, null);
  },
  [types.ACTION.SIGN_UP]({commit}, user) {
    commit(types.MUTATION.STORE_NEW_USER, user);
  }
}
