import { test, expect } from "@playwright/test";
import LoginPage from "../POM/loginpage";
import DashBoardPage from "../POM/dashboardpage";

test.describe("Asana Login and dashboard test", () => {
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

  test("Should Log in with existing account, GA-0", async ({ page }) => {
    // const mainPageLogo = page.locator(dashBoardPage.mainPageLogo);
    await expect(dashBoardPage.mainPageLogo).toHaveText("Projects");
  });
  test("Should Navigate to Web application and verify 'Implement user authentication' in To Do column with Feature & High Priority tags, GA-1", async ({ page }) => {
    await dashBoardPage.webApplicationButton.click();
    await expect(dashBoardPage.tabHeader).toHaveText("Web Application");
    await expect(dashBoardPage.toDoTab).toContainText("Implement user authentication");
    // const featureTagInToDo = dashBoardPage.toDoTab.featureTag;
    await dashBoardPage.verifyTagInTab(dashBoardPage.toDoTab, dashBoardPage.featureTag);
  });
  test("Should Navigate to Web application and verify 'Fix navigation bug' in To Do column with Bug tag, GA-2", async ({ page }) => {
    await dashBoardPage.webApplicationButton.click();
    await expect(dashBoardPage.tabHeader).toHaveText("Web Application");
    await expect(dashBoardPage.toDoTab).toContainText("Fix navigation bug");
    await dashBoardPage.verifyTagInTab(dashBoardPage.toDoTab, dashBoardPage.bugTag);
  });
  test("Should Navigate to Web application and verify 'Design system updates' in In Progress column with Design tag, GA-3", async ({ page }) => {
    await dashBoardPage.webApplicationButton.click();
    await expect(dashBoardPage.tabHeader).toHaveText("Web Application");
    await expect(dashBoardPage.inProgressTab).toContainText("Design system updates");
    await dashBoardPage.verifyTagInTab(dashBoardPage.inProgressTab, dashBoardPage.designTag);
  });
  test("Should Navigate to Mobile application and verify 'Push notification system' in To Do column with Feature tag, GA-4", async ({ page }) => {
    await dashBoardPage.mobileApplicationButton.click();
    await expect(dashBoardPage.tabHeader).toHaveText("Mobile Application");
    await expect(dashBoardPage.toDoTab).toContainText("Push notification system");
    await dashBoardPage.verifyTagInTab(dashBoardPage.toDoTab, dashBoardPage.featureTag);
  });
  test("Should Navigate to Mobile application and verify 'Offline mode' in In Progress column with Feature & High Priority tags, GA-5", async ({ page }) => {
    await dashBoardPage.mobileApplicationButton.click();
    await expect(dashBoardPage.tabHeader).toHaveText("Mobile Application");
    await expect(dashBoardPage.inProgressTab).toContainText("Offline mode");
    await dashBoardPage.verifyTagInTab(dashBoardPage.inProgressTab, dashBoardPage.featureTag);
    await dashBoardPage.verifyTagInTab(dashBoardPage.inProgressTab, dashBoardPage.priorityTag);
  });
  test("Should Navigate to Mobile application and verify 'App icon design' in Done column with Design tag, GA-6", async ({ page }) => {
    await dashBoardPage.mobileApplicationButton.click();
    await expect(dashBoardPage.tabHeader).toHaveText("Mobile Application");
    await expect(dashBoardPage.doneTab).toContainText("App icon design");
    await dashBoardPage.verifyTagInTab(dashBoardPage.doneTab, dashBoardPage.designTag);
    
  });
});
