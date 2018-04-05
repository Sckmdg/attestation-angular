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
      },
      {
        id: 4,
        title: 'Приложение',
        template: getTemplate(3)
      },
      {
        id: 5,
        title: 'Проблемы',
        template: getTemplate(4)
      },
      {
        id: 6,
        title: '+ и -',
        template: getTemplate(5)
      },
      {
        id: 7,
        title: 'Выводы',
        template: getTemplate(6)
      }
    ];
    return {slides};
  }
}
