import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      bookmarks: [
        {
          id: 1,
          title: 'Google',
          url: 'https://google.com',
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          title: 'avkCodex',
          url: 'https://avkcodex.github.io/bookmarks',
          createdAt: new Date().toISOString()
        }
      ]
    };
  }
}