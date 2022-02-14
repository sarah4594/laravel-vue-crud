import VueRouter from "vue-router";
import Protected from "./layouts/Protected";
import Public from "./layouts/Public";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Store from "./store";

const routes = [
    {
        path: "/",
        component: Public,
        children: [
            {
                path: "/",
                component: Login,
            },
            {
                path: "/register",
                component: Register,
            },
        ],
    },
    {
        path: "/app",
        component: Protected,
        children: [
            {
                path: "/dashboard",
                component: Dashboard,
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (Store.getters["auth/getAuthenticated"]) {
            next();
            return;
        }
        next("/");
    } else {
        next();
    }
});

export default router;
