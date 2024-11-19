import BaseComponent from './base.component';

class SideMenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }
  
  get name() {
    return this.rootEl.$('.name');
  }

  item(param) {
    const selectors = {
      dashboard: '[routerlink="/dashboard"]',
      schedule: '[routerlink="/calendar"]',
      doctors: '[routerlink="/doctors"]',
      //   patients: '',
      //   preferences: '',
      //   about: '',
    };

    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

export default SideMenuComponent;