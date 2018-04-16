import { InMemoryDbService } from 'angular-in-memory-web-api';
import { getTemplate } from './slider-templates/templates';

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
        title: 'Наследие',
        template: getTemplate(3)
      },
      {
        id: 5,
        title: 'Передача данных',
        template: getTemplate(4)
      },
      {
        id: 6,
        title: 'Новые фишки',
        template: getTemplate(5)
      },
      {
        id: 7,
        title: 'Приложение',
        template: getTemplate(6)
      },
      {
        id: 8,
        title: 'Директива',
        template: getTemplate(7)
      },
      {
        id: 9,
        title: 'app.component',
        template: getTemplate(8)
      },
      {
        id: 10,
        title: 'root-slide',
        template: getTemplate(9)
      },
      {
        id: 11,
        title: 'Проблемы',
        template: getTemplate(10)
      },
      {
        id: 12,
        title: 'Бекенд',
        template: getTemplate(11)
      },
      {
        id: 13,
        title: 'Роутинг',
        template: getTemplate(12)
      },
      {
        id: 14,
        title: 'Дин. Шаблон',
        template: getTemplate(13)
      },
      {
        id: 15,
        title: '+ и -',
        template: getTemplate(14)
      },
      {
        id: 16,
        title: 'Выводы',
        template: getTemplate(15)
      }
    ];
    return {slides};
  }
}
