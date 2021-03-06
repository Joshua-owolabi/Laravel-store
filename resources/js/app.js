/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
window.Vue = require("vue");
import AuthScript from "./AuthScript";
Vue.prototype.$AuthScript = new AuthScript(window.user);
import moment from "moment";
import { Form, HasError, AlertError } from "vform";
import VueProgressBar from "vue-progressbar";
import Swal from "sweetalert2";
window.Swal = Swal;

// global event listener
window.Signal = new Vue();
// sweet alert toast mixin
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000
});
window.Toast = Toast;
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// Adding the view router via import
import VueRouter from "vue-router";
import Auth from "./AuthScript";
//using the view router here
Vue.use(VueRouter);

// changing text to uppercase
// using vue filters
Vue.filter("upperText", text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

// using vue filter for the date formatting
Vue.filter("dateFilter", dateData => {
    return moment(dateData).format("MMMM Do YYYY, h:mm:ss a");
});

const options = {
    color: "rgb(1, 120, 107)",
    failedColor: "red",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 800
    },
    autoRevert: true,
    location: "top",
    inverse: false
};
//adding progress bar for the routes
Vue.use(VueProgressBar, options);
// creating routes
let routes = [
    {
        path: "/dashboard",
        component: require("./components/Dashboard.vue").default
    },
    { path: "/store", component: require("./components/Store.vue").default },
    {
        path: "/products",
        component: require("./components/Products.vue").default
    },
    { path: "/sales", component: require("./components/Sales.vue").default },
    {
        path: "/category",
        component: require("./components/Category.vue").default
    },
    {
        path: "/users",
        component: require("./components/Users.vue").default
    },
    {
        path: "/profile",
        component: require("./components/Profile.vue").default
    },
    {
        path: "/company",
        component: require("./components/Company.vue").default
    }
];

// using routes
const router = new VueRouter({
    mode: "history",
    routes
});
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router
});
