import Menu from '../models/menu';
import placeholderData from '../utils/placeholderData';

const { menus } = placeholderData;

const MenuServices = {
  setTodayMenu(menu) {
    const todayMenu = new Menu();
    todayMenu.date = menu.date;
    todayMenu.menu = menu.menu;
    menus.push(todayMenu);
    return todayMenu;
  },
  getMenu(date) {
    // date should be in format : "Mon Jan 01 2000"
    const requiredMenu = menus.find(menu => date === menu.date);
    return requiredMenu;
  },
};

export default MenuServices;
