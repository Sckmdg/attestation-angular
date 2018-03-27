import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const slides = [
      {
        id: 0,
        order: 1,
        title: 'Test',
        template: `<p>test</p>`,
      }
    ];
    return {slides};
  }
}
