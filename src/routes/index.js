import config from '../config';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import MenShoes from '../pages/MenShoes';
import WomenShoes from '../pages/WomenShoes';
import Detail from '../pages/Detail';
import Admin from '../pages/Admin';
import ShoppingCart from 'pages/ShoppingCart';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.men, component: MenShoes },
    { path: config.routes.women, component: WomenShoes },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.shoppingcart, component: ShoppingCart },
];

const privateRoutes = [{ path: config.routes.admin, component: Admin }];

export { publicRoutes, privateRoutes };
