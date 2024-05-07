describe('EPAM Page', () => {
  it('should have a search button', async () => {
    browser.url('/');
    const searchButton = $('button.header-search__button');

    const isSearchButtonDisplayed = await searchButton.isDisplayed();
    assert.isTrue(isSearchButtonDisplayed, 'Search button is not displayed');

    (await searchButton.isDisplayed()).should.be.true;

    expect(await searchButton.isDisplayed()).to.be.true;
  });

  it('should have EPAM logo', async () => {
    browser.url('/');
    const logo = $('img.header__logo');

    const isLogoDisplayed = await logo.isDisplayed();
    assert.isTrue(isLogoDisplayed, 'EPAM logo is not displayed');

    (await logo.isDisplayed()).should.be.true;

    expect(await logo.isDisplayed()).to.be.true;
  });

  it('should have a link to EPAM YouTube channel', async () => {
    browser.url('/');
    const youtubeLink = $('a.footer__social-link[data-type="youtube"]');

    const isYoutubeLinkDisplayed = await youtubeLink.isDisplayed();
    assert.isTrue(isYoutubeLinkDisplayed, 'YouTube link is not displayed');

    (await youtubeLink.isDisplayed()).should.be.true;

    expect(await youtubeLink.isDisplayed()).to.be.true;
  });
});
