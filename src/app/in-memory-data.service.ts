import { InMemoryDbService } from 'angular-in-memory-web-api';
import { getTemplate } from './slider-templates/templates'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const slides = [
      {
        id: 1,
        title: 'План',
        template: getTemplate(0)
      },
      {
        id: 2,
        title: 'О фреймворке',
        template: getTemplate(1)
      },
      {
        id: 3,
        title: 'Возможности',
        template: getTemplate(2)
      }
    ];
    return {slides};
  }
}
