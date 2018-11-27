//import AsyncCompnent from "../highOrderComponents/AsyncComponent";
import Welcome from "../pages/Welcome.js";

import UserMnagement from "../pages/UserManagement.js";
//const Welcome = AsyncCompnent(() => import("../pages/Welcome.js"));
//const UserMnagement = AsyncCompnent(() => import("../pages/UserManagement.js"));

const ROUTES = [
    {
        key: 'welcome',
        link: '/welcome',
        iconType: 'pie-chart',
        text: 'Welcome',
        component: Welcome
    }, {
        key: 'userManagement',
        link: '/userMnagement',
        iconType: 'profile',
        text: 'User Mnagement',
        component: UserMnagement
    }
];

export { ROUTES };