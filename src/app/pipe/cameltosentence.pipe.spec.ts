import { CamelToSentencePipe } from './cameltosentence.pipe';

describe('CamelToSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new CamelToSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
