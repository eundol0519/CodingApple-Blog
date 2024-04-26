import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home"
import List from "../pages/List"
import Detail from "../pages/Detail"
import Error from "../pages/Error"

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/writing",
        component: List,
    },
    {
        path: "/writing/:id",
        component: Detail
    },
    {
        path: "/:catchAll(.*)", // 사용자 정의 정규식을 사용하여 catch-all 라우트 정의
        component: Error
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 