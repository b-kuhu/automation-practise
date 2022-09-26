Feature('order');

Scenario('test ordering an item', async({ I }) => {
  I.amOnPage("https://amazon.in/");
  I.fillField('//input[@aria-label="Search"]',"figaro olive");
  I.wait(2);
  I.click('//div[@aria-label="figaro olive oil 2 litre"]');
  I.waitForNavigation(4);
  I.click('Get It by Tomorrow');
  I.wait(3);
  I.fillField('Min',500);
  I.fillField('Max',1000);
  I.click('Go');
  I.waitForNavigation();
  const text = await I.grabTextFrom('//span[@class="a-size-medium a-color-base a-text-normal"]');
  I.click(text);
  I.waitForNavigation();
  I.see(Text);
  I.click('Add to Cart');
});
