import { InMemoryDbService } from 'angular-in-memory-web-api';
// import test from './slider-templates/test.html'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // console.log(test);
    const slides = [
      {
        id: 1,
        title: 'Test1',
        template: 'test1'
      },
      {
        id: 2,
        title: 'Test2',
        template: 'test2'
      },
      {
        id: 3,
        title: 'Test3',
        template: 'test3'
      },
      {
        id: 4,
        title: 'Test4',
        template: 'test4'
      },
      {
        id: 5,
        title: 'Test5',
        template: 'test5'
      },
      {
        id: 6,
        title: 'Test6',
        template: 'test6'
      },
      {
        id: 7,
        title: 'Test7',
        template: 'test7'
      },
      {
        id: 8,
        title: 'Test8',
        template: 'test8'
      },
      {
        id: 9,
        title: 'Test9',
        template: 'test9'
      },
      {
        id: 10,
        title: 'Test10',
        template: 'test10'
      },
      {
        id: 11,
        title: 'Test11',
        template: 'test11'
      }
    ];
    return {slides};
  }
}
