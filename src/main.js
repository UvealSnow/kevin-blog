// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("~/main.scss");

import DefaultLayout from '~/layouts/Default.vue';
import * as moment from 'moment';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

moment.locale('en');

extend('required', {
  ...required,
  message: 'This field is required, please fill it up!',
});

extend('email', {
  ...email,
  message: 'Please provide a valid email.',
});

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
