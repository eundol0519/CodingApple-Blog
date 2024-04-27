import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home"
import List from "../pages/List"
import Detail from "../pages/detail/Detail"
import FirstChildren from "../pages/detail/FirstChildren"
import SecondChildren from "../pages/detail/SecondChildren"
import Error from "../pages/Error"

// Restful Route로 설정
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/writing",
        component: List, beforeEnter: () => { // Navigation Guard
            const test = true

            if (!test) {
                return '/'
            }
        },
    },
    {
        path: "/writing/:id(\\d+)", // URL 파라미터
        component: Detail,
        beforeEnter: (to, from) => { // Navigation Guard
            console.log(to, from)
        },
        children: [
            {
                path: "firstChildren",
                component: FirstChildren
            },
            {
                path: "secondChildren",
                component: SecondChildren
            },
        ],
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