const {Builder, By, Key, util}= require("selenium-webdriver")
async function example() {
   let driver = await new  Builder().forBrowser("chrome").build();
   await driver.get("http://google.com");
   await driver.findElement(By.name("q")).sendKeys("What is Devops",Key.RETURN);

   await driver.sleep(5000);

   await driver.close();

}
example();