import { DRAGONS } from '../mocks/dragons';
import { ArraySortPipe } from './array-sort.pipe';

describe('ArraySortPipe', () => {
  it('create an instance', () => {
    const pipe = new ArraySortPipe();
    expect(pipe).toBeTruthy();
  });

  it('DEVE TESTAR O PIPE', () => {
    const pipe = new ArraySortPipe();
    const dragons = DRAGONS;
    dragons.forEach(dragon => {
      expect(pipe.transform(dragons, dragon?.name)).toBeTruthy();
      
    });
  });
});
