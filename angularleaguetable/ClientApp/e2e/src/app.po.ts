import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string = '/') {
    return browser.get(path);
  }

  getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }

  getForecastHeading() {
    return element(by.css('#tableLabel')).getText();
  }
}
