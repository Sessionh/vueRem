import main from '../../components/main';
import util from '../util';
import req from '../requreCom';
const login = resolve => require(['@/login'], resolve);
const routers = [
  {
    path: '/',
    name: 'login',
    component: login
  }
];
export default routers;
