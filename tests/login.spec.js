import { test, expect } from "@playwright/test";
import LoginPage from "../POM/loginpage";
import DashBoardPage from "../POM/dashboardpage";
import testData from "../data/testCases.json";

test.describe("Asana Login and dashboard test using JSON", () => {
  let loginPage;
  let dashBoardPage;
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashBoardPage = new DashBoardPage(page);
    await loginPage.visitLoginPage();
    await loginPage.login(email, password);
  });
  for (const data of testData) {
    test(data.description, async ({ page }) => {
      if (data.application === "web") {
        await dashBoardPage.webApplicationButton.click();
      } else {
        await dashBoardPage.mobileApplicationButton.click();
      }
      await expect(dashBoardPage.tabHeader).toHaveText(data.header);
      await expect(dashBoardPage[data.column]).toContainText(data.task);
      for (const tag of data.tags) {
        await dashBoardPage.verifyTagInTab(dashBoardPage[data.column], dashBoardPage[tag]);
      }
    });
  }
});
