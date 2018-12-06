import Welcome from "../pages/Welcome.js";
import UserMnagement from "../pages/UserManagement.js";
import Test from "../pages/Test.js";

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
    , {
        key: 'test',
        link: '/test',
        iconType: 'profile',
        text: 'Test',
        component: Test
    }
];

export { ROUTES };