import { expect } from '@playwright/test'
export class DashBoardPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.mainPageLogo = page.locator('[class="text-lg font-semibold"]');
      this.tabHeader = page.locator('[class="text-xl font-semibold text-gray-900"]');
      this.webApplicationButton = page.locator ('button h2').nth(0);
      this.mobileApplicationButton = page.locator ('button h2').nth(1);
      this.toDoTab = page.locator('[class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"]').nth(0)
      this.inProgressTab = page.locator('[class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"]').nth(1)
      this.reviewTab = page.locator('[class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"]').nth(2)
      this.doneTab = page.locator('[class="flex flex-col w-80 bg-gray-50 rounded-lg p-4"]').nth(3)
      this.taskName = page.locator("[class*='bg-white p-4'] h3")
      this.featureTag = page.locator ('[class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"]')
      this.priorityTag = page.locator ('[class="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800"]')
      this.designTag = page.locator ('[class="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"]')
      this.bugTag = page.locator ('[class="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"]')
            
    }

   async verifyTagInTab(tab, tagSelector) {
     const tagElement = tab.locator(tagSelector);
     await expect(tagElement).toBeVisible();
     }
      
    
    }
  export default DashBoardPage;
  