import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class echoPage {
      [x: string]: any;

      private page: Page;
      private isMob: Boolean | undefined;
      static login: any;
      static buffer: void;

      constructor(page: Page, isMob: Boolean | undefined) {
            this.page = page;
            this.isMob = isMob;
      }

      //Contact Us

      async ClickContact_us() {
            const ele = this.page.locator("//a[@title='Contact Us']")
            expect(ele).toBeEnabled()
            await ele.click()
      }
      async CheckTitleText() {
            const locator = this.page.locator("//h1[text()='Contact Us']")
            expect(locator).toContainText('Contact Us')

      }
      async checkText() {
            const locator = this.page.locator("//div[@class='text-center']//p[1]")
            expect(locator).toContainText('Thank you for reaching us! We are always happy to hear from you')
      }
      async LabelText() {
            const locator = this.page.locator("//label[text()='Purpose']")
            expect(locator).toContainText('Purpose')
      }
      async ClickDropdown() {
            const locator = this.page.selectOption("select[name='purpose']", { value: "event" }) 
      }
      async LabelYourname() {
            const locator = this.page.locator("//label[text()='Your Name']")
            expect(locator).toContainText('Your Name')
      }
      async LabelYourcity() {
            const locator = this.page.locator("//label[text()='Your City']")
            expect(locator).toContainText('Your City')
      }
      async ClickDpevent() {
            const ele = this.page.locator("option[value='event']")
            await ele.click()
      }
      async LabelPhonenum() {
            const locator = this.page.locator("//label[text()='Phone Number']")
            expect(locator).toContainText('Phone Number')
      }
      async LabelEmail() {
            const locator = this.page.locator("//label[text()='Email']")
            expect(locator).toContainText('Email')
      }
      async LabelMessage() {
            const locator = this.page.locator("//label[text()='Message']")
            expect(locator).toContainText('Message')
      }
      async inputYourName() {
            const locator = this.page.locator("input[name='name']")
            expect(locator).toBeVisible()
            await locator.fill("Mohammad Sohag")
      }
      async ClickYourcity() {
            const locator = this.page.selectOption("select[name='city']", { value: "Dhaka" })
            
      }
      async inputYourPhnNum() {
            const locator = this.page.locator("input[name='contactnumber']")
            expect(locator).toBeVisible()
            await locator.fill("01677997319")
      }
      async inputYourEml() {
            const locator = this.page.locator("input[type='email']")
            expect(locator).toBeVisible()
            await locator.fill("sohagechologyx@gmail.com")
      }
      async inputMsg() {
            const locator = this.page.locator("textarea[name='comment']")
            expect(locator).toBeVisible()
            await locator.fill("Lets have a fun")
      }
      async ClickShohoz() {
            const locator = this.page.locator("(//img[@alt='Shohoz'])[1]")
            expect(locator).toBeVisible()
            await locator.click()
      }
      async Clickchangelanguage() {
            const locator = this.page.locator("div.placeholder")
            expect(locator).toBeVisible()
            await locator.click()
      }
      async ClickchangelanguageBan() {
            const locator = this.page.locator("//div[text()='বাংলা']")
            expect(locator).toBeVisible()
            await locator.click()
      }
      async ClickchangelanguageEng() {
            const locator = this.page.locator("//div[text()='English']")
            expect(locator).toBeVisible()
            await locator.click({ force: true })
      }

      //Bus reservation

      async ClickBus() {
            console.log("Is mobile view? " + this.isMob)
            
            if (this.isMob) {
                  const locator = this.page.locator("(//a[@class='meanmenu-reveal']//span)[2]")
                  expect(locator).toBeVisible()
                  await locator.click()
            }
            const ele = this.page.locator("a[title='Bus']")
            expect(ele).toBeEnabled()
            await ele.click()
      }

      async inputFrom() {
            const locator = this.page.locator("input[name='dest_from']")
            expect(locator).toBeVisible()
            await locator.fill("Dhaka")
      }
      async inputTo() {
            const locator = this.page.locator("input[name='dest_to']")
            expect(locator).toBeVisible()
            await locator.fill("Chittagong")
      }
      async clickDOJ() {
            const locator = this.page.locator("input[name='doj']")
            expect(locator).toBeVisible()
            await locator.click()
      }
      async clickDOJDate() {
            const locator = this.page.locator("//a[contains(text(),'28')]")
            expect(locator).toBeVisible()
            await locator.click({ force: true})
      }

      async clickDOR() {
            const locator = this.page.locator("input[name='dor']")
            expect(locator).toBeVisible()
            await locator.click()
      }
      async clickDORDate() {
            const locator = this.page.locator("//a[contains(text(),'29')]")
            expect(locator).toBeVisible()
            await locator.click()
      }
      async clickSearchTkt() {
            const locator = this.page.locator("//button[@type='submit']")
            expect(locator).toBeVisible()
            await locator.click()
      }
      async clickViewSeats() {
            const locator = this.page.locator("(//button[@tocity='Chittagong']//div)[1]")
            // expect(locator).toBeVisible()
            await locator.click()
      }
      async clickClose() {
            const locator = this.page.locator("//span[text()='Close']")
            expect(locator).toBeVisible()
            await locator.click()
      }

      //Launch Reservation

      async ClickLaunch() {
            const ele = this.page.locator("//a[@title='Launch']")
            expect(ele).toBeEnabled()
            await ele.click()
      }
      async inputLTo() {
            const locator = this.page.locator("input[name='dest_to']")
            expect(locator).toBeVisible()
            await locator.fill("Chandpur")
      }

      //Train Reservation

      async ClickTrain() {
            // const ele = this.page.locator("//a[@title='Train']")
            // expect(ele).toBeEnabled()
            // await ele.click()
            await this.page.goto("https://eticket.railway.gov.bd/")
      }

      async ClickCookie() {
            const ele = this.page.locator("//button[text()='I Agree']")
            expect(ele).toBeEnabled()
            await ele.click()
      }
      async From() {
            const locator = this.page.locator("input[name='dest_from']")
            expect(locator).toBeVisible()
            await locator.fill("Dhaka")
      }
      async To() {
            const locator = this.page.locator("input[name='dest_to']")
            expect(locator).toBeVisible()
            await locator.fill("Chattogram")
      }
      async clickDOJTrain() {
            const locator = this.page.locator("//input[@placeholder='Pick a date']")
            expect(locator).toBeVisible()
            await locator.click()
      }
      async clickDOJDateTrain() {
            const locator = this.page.locator("//a[contains(text(),'25')]")
            expect(locator).toBeVisible()
            await locator.click()
      }
      // Option automation ("path", { value: "value name" }
      async clickchooseclass() {
            const locator = this.page.selectOption("select[name='choose_class']", { value: "AC_B" })
                  
      }

      
      async ClickCall() {
            const ele = await this.page.locator("a[title='Call: 16374']")
            this.page.on('dialog', async dialog => {
                  console.log(dialog.message());
                  await dialog.dismiss();      
            });
             this.page.evaluate(() => alert('1'));       
      }

}





