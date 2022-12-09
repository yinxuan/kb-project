import {createRouter,createWebHashHistory} from 'vue-router';
import TetrisIndex from '../views/tetris/TetrisIndex'

/* 引入页面 */

const routes = [
    {
        path:'/',
        name:'one',
        // redirect:'',
        component: () => import('../views/HomeIndex'),
        children:[
            {
                path: '/demo',
                name: 'tetris',
                component: TetrisIndex,
            }
        ]
    },
    {
        path: '/tetris',
        name: 'tetris',
        component: TetrisIndex, 
    }
    ,
    {
        path: '/cards',
        name: 'cards',
        component: () => import('../views/lushi/CardIndex'),
    }
];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;

  