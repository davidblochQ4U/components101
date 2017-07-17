import { Components101Page } from './app.po';

describe('components101 App', () => {
  let page: Components101Page;

  beforeEach(() => {
    page = new Components101Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
