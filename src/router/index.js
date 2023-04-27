import Vue from 'vue';
import VueRouter from 'vue-router';

import pantallaInicio from "../components/pantallaInicio";
import pantallaP from "../components/pantallaP";

import introduccion from "../components/introduccion";
import actividad from "../components/actividad";
import evaluacion from "../components/evaluacion";
import creditos from "../components/creditos";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'pantallaInicio',
        component: pantallaInicio,
    },

    {
        path: '/pantallaP',
        name: 'pantallaP',
        component: pantallaP,

        children: [{
                path: '/introduccion',
                name: 'introduccion',
                component: introduccion,
            },

            {
                path: '/actividad',
                name: 'act',
                component: actividad,
            },

            {
                path: '/evaluacion',
                name: 'evaluacion',
                component: evaluacion,
            },
            {
                path: '/creditos',
                name: 'creditos',
                component: creditos,
            },
        ]
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;