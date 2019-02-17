import MenuServices from '../services/menu';

const MenuControllers = {
  setMenu(req, res) {
    const menu = req.body;
    const setMenu = MenuServices.setTodayMenu(menu);
    return res.json({
      status: 'success',
      data: setMenu,
    });
  },
  getMenu(req, res) {
    const { date } = req.body;
    /* req.body should be in format:
      {
        "date": "Mon Jan 01 2019"
      } */
    const requestedMenu = MenuServices.getMenu(date);
    return res.json({
      status: 'success',
      data: requestedMenu,
    });
  },
};

export default MenuControllers;
