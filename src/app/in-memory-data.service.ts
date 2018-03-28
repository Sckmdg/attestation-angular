import { InMemoryDbService } from 'angular-in-memory-web-api';
// import test from './slider-templates/test.html'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // console.log(test);
    const slides = [
      {
        id: 0,
        order: 1,
        title: 'Test1',
        template: 'test1'
      },
      {
        id: 1,
        order: 2,
        title: 'Test2',
        template: 'test2'
      },
      {
        id: 2,
        order: 2,
        title: 'Test3',
        template: 'test3'
      },
      {
        id: 3,
        order: 2,
        title: 'Test4',
        template: 'test4'
      },
      {
        id: 4,
        order: 2,
        title: 'Test5',
        template: 'test5'
      },
      {
        id: 5,
        order: 2,
        title: 'Test6',
        template: 'test6'
      },
      {
        id: 6,
        order: 2,
        title: 'Test7',
        template: 'test7'
      },
      {
        id: 8,
        order: 2,
        title: 'Test9',
        template: 'test9'
      },
      {
        id: 9,
        order: 2,
        title: 'Test10',
        template: 'test10'
      },
      {
        id: 10,
        order: 2,
        title: 'Test11',
        template: 'test11'
      },
      {
        id: 11,
        order: 2,
        title: 'Test12',
        template: 'test12'
      }
    ];
    return {slides};
  }
}
