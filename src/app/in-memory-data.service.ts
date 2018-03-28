import { InMemoryDbService } from 'angular-in-memory-web-api';
// import test from './slider-templates/test.html'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // console.log(test);
    const slides = [
      {
        id: 0,
        order: 1,
        title: 'Test',
        template: 'test'
      },
      {
        id: 1,
        order: 2,
        title: 'Test2',
        template: 'test2'
      }
    ];
    return {slides};
  }
}
