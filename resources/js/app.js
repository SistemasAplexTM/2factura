import { getToken } from '@/utils/auth'
window._ = require('lodash');
import Vue from 'vue'
window.axios = require('axios');
window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();

window.$ = require("jquery");

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import IconAplex from '@/components/Icon/Icon'
Vue.component('icon-aplex', IconAplex)

import Toastr from './components/enso/bulma/toastr';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

Vue.component('fa', FontAwesomeIcon);

Vue.use(Toastr, {
    position: 'right',
    duration: 3000,
    closeButton: true,
});

import bulma from 'bulma'
Vue.use(bulma);
import './styles/index.scss' // global css
import App from './App.vue'

import router from './router'
import store from './store'

Vue.use(ElementUI);

import Vueditor from 'vueditor'

import 'vueditor/dist/style/vueditor.min.css'
// your config here
let config = {
  toolbar: [
    'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
    'bold', 'italic', 'underline', 'strikeThrough', 'links', 'divider', 'subscript', 'superscript',
    'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent',
    'insertOrderedList', 'insertUnorderedList', '|', 'picture', 'tables', '|', 'switchView'
  ],
  fontName: [
    {val: 'arial black'},
    {val: 'times new roman'},
    {val: 'Courier New'}
  ],
  fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
  uploadUrl: ''
};
Vue.use(Vueditor, config);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
