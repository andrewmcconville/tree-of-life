import { TreeOfLifePage } from './app.po';

describe('tree-of-life App', () => {
  let page: TreeOfLifePage;

  beforeEach(() => {
    page = new TreeOfLifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tree works!');
  });
});
