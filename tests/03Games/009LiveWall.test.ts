import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// const clipboard = require("clipboardy");


let url: any;

let page: Page;

// test.describe("Suite demo", () => {
//         let page: Page;
//         let context: BrowserContext;
//         test.beforeAll(async ({ browser }) => {
//             context = await browser.newContext();            
//             await page.goto("/admin/#/sign-in");
//         })



test("009LW-001 | Validate Font Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)

        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {


        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        //click Game Stop Btn
        await liveWallPage.clickGameStopBtn()


        //click Design Page
        await liveWallPage.clickDesignPage()

        //verify Fonts Title Text
        await liveWallPage.verifyFontsTitleText()

        //delete Uploaded Feed Right Image
        await liveWallPage.deleteUploadedFeedRightImage()

        //delete Uploaded Font
        await liveWallPage.deleteUploadedFont()


        //verify Upload Font Text
        await liveWallPage.verifyUploadFontText()

        await functions.fontUploadFunction()

        //verify Upload Font Text
        await liveWallPage.clickToUploadFont()

        await page.waitForTimeout(6000)


        // })

})
test("009LW-002 | Validate Color Input Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()


        //click Design Page
        await liveWallPage.clickDesignPage()

        //click Clear Btn
        await liveWallPage.clickClearBtn()

        await page.waitForTimeout(2000)

        //verify Fonts Title Text
        await liveWallPage.verifyFontsTitleText()


        //click Background Color Picker Input Field
        await liveWallPage.clickBackgroundColorPickerInputField()


        //input Background First RGB Color
        await liveWallPage.inputBackgroundFirstRGBColor()


        //input Background Box Color RGB Second
        await liveWallPage.inputBackgroundBoxColorRGBSecond()



        //input Background Box Color RGB Third
        await liveWallPage.inputBackgroundBoxColorRGBThird()



        //input Background Box Color Opacity
        await liveWallPage.inputBackgroundBoxColorOpacity()



        //input Background Box Color HEX Color
        await liveWallPage.inputBackgroundBoxColorHEXColor()



        //click Save Btn
        await liveWallPage.clickSaveBtn()

        await page.waitForTimeout(2000)



        //click Font Color Picker Input Field
        await liveWallPage.clickFontColorPickerInputField()



        //input Font First RGB Color
        await liveWallPage.inputFontFirstRGBColor()



        //input Font Box Color RGB Second
        await liveWallPage.inputFontBoxColorRGBSecond()

        //input Font Box Color RGB Third
        await liveWallPage.inputFontBoxColorRGBThird()

        //input Font Box Color Opacity
        await liveWallPage.inputFontBoxColorOpacity()

        //input Font Box Color HEX Color
        await liveWallPage.inputFontBoxColorHEXColor()

        //click Save Btn
        await liveWallPage.clickSaveBtn()


        await page.waitForTimeout(6000)


        // })

})

test("009LW-003 | Validate Upload Image Delete Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()


        //click Design Page
        await liveWallPage.clickDesignPage()



        //delete Uploaded Feed Left Image
        await liveWallPage.deleteUploadedFeedLeftImage()

        //delete Uploaded Feed Image
        await liveWallPage.deleteUploadedFeedImage()
        //delete Uploaded Output Background
        await liveWallPage.deleteUploadedOutputBackground()
        //delete Uploaded Output Frame
        await liveWallPage.deleteUploadedOutputFrame()
        //delete Uploaded FullScreen Logo
        await liveWallPage.deleteUploadedFullScreenLogo()
        //delete Uploaded Mobile Frame
        await liveWallPage.deleteUploadedMobileFrame()
        //delete Uploaded Background
        await liveWallPage.deleteUploadedBackground()

        await page.waitForTimeout(2000)

        await functions.frameUploadFunction()
        //click To Upload Mobile Frame
        await liveWallPage.clickToUploadMobileFrame()
        await functions.fileUploadCropper()        


        await page.waitForTimeout(8000)

        // })

})

test("009LW-004 | Validate Image Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()


        //click Design Page
        await liveWallPage.clickDesignPage()

        await page.waitForTimeout(4000)

        //click ToUpload Feed Right Image
        await functions.logoImageUploadFunction()
        await liveWallPage.clickToUploadFeedRightImage()
        await functions.fileUploadCropper() 
       
        //click ToUpload FeedImage
        await liveWallPage.clickToUploadFeedLeftImage()
        await functions.fileUploadCropper()        


        //click To Upload Feed Image
        await liveWallPage.clickToUploadFeedImage()
        await functions.fileUploadCropper()        

        //click ToUpload Output Background
        await liveWallPage.clickToUploadOutputBackground()
        await functions.fileUploadCropper()        


        //click To Upload Output Frame
        await liveWallPage.clickToUploadOutputFrame()
        await functions.fileUploadCropper()        


        //click To Upload FullScreen Logo
        await liveWallPage.clickToUploadFullScreenLogo()
        await functions.fileUploadCropper()        



        //click To Upload Background
        await liveWallPage.clickToUploadBackground()
        await functions.fileUploadCropper()        


        await page.waitForTimeout(8000)

        // })

})


test("009LW-005 | Validate Display Messages Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()


        //click Design Page
        await liveWallPage.clickDesignPage()

        //input Pre Live Text
        await liveWallPage.inputPreLiveText()

        await liveWallPage.preLiveInputBoxFonts()
        await liveWallPage.preLiveInputBoxArial()
        await liveWallPage.preLiveInputBoxBlocktype()
        await liveWallPage.preLiveInputBoxNormal()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH1()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH2()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH3()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH4()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH5()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH6()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockquote()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBold()
        await liveWallPage.preLiveInputBoxItalic()
        await liveWallPage.preLiveInputBoxUnderline()
        await liveWallPage.preLiveInputBoxsikethrough()
        await liveWallPage.preLiveInputBoxColorpk()
        await liveWallPage.preLiveInputBoxTextcl()
        await liveWallPage.preLiveInputBoxGreencl()
        await liveWallPage.preLiveInputBoxColorpk()

        await liveWallPage.preLiveInputBoxHighlightcl()
        await liveWallPage.preLiveInputBoxHighlightgrn()
        await liveWallPage.preLiveInputBoxLeft()
        await liveWallPage.preLiveInputBoxCenter()
        await liveWallPage.preLiveInputBoxRight()
        await liveWallPage.preLiveInputBoxOutdent()
        await liveWallPage.preLiveInputBoxIndent()
        await liveWallPage.preLiveInputBoxOrdered()
        await liveWallPage.preLiveInputBoxUnOrdered()
        await liveWallPage.preLiveInputBoxRemove()


 //input Post Live Text
        await liveWallPage.postLiveInputBoxFonts()
await liveWallPage.postLiveInputBoxArial()
await liveWallPage.postLiveInputBoxBlocktype()
await liveWallPage.postLiveInputBoxNormal()
await liveWallPage.postLiveInputBoxBlocktype()

await liveWallPage.postLiveInputBoxBlockH1()
await liveWallPage.postLiveInputBoxBlocktype()

await liveWallPage.postLiveInputBoxBlockH2()
await liveWallPage.postLiveInputBoxBlocktype()

await liveWallPage.postLiveInputBoxBlockH3()
await liveWallPage.postLiveInputBoxBlocktype()

await liveWallPage.postLiveInputBoxBlockH4()
await liveWallPage.postLiveInputBoxBlocktype()

await liveWallPage.postLiveInputBoxBlockH5()
await liveWallPage.postLiveInputBoxBlocktype()

await liveWallPage.postLiveInputBoxBlockH6()
await liveWallPage.postLiveInputBoxBlocktype()

await liveWallPage.postLiveInputBoxBlockquote()
await liveWallPage.postLiveInputBoxBlocktype()

await liveWallPage.postLiveInputBoxBold()
await liveWallPage.postLiveInputBoxItalic()
await liveWallPage.postLiveInputBoxUnderline()
await liveWallPage.postLiveInputBoxsikethrough()
await liveWallPage.postLiveInputBoxColorpk()
await liveWallPage.postLiveInputBoxTextcl()
await liveWallPage.postLiveInputBoxGreencl()
await liveWallPage.postLiveInputBoxColorpk()

await liveWallPage.postLiveInputBoxHighlightcl()
await liveWallPage.postLiveInputBoxHighlightgrn()
await liveWallPage.postLiveInputBoxLeft()
await liveWallPage.postLiveInputBoxCenter()
await liveWallPage.postLiveInputBoxRight()
await liveWallPage.postLiveInputBoxOutdent()
await liveWallPage.postLiveInputBoxIndent()
await liveWallPage.postLiveInputBoxOrdered()
await liveWallPage.postLiveInputBoxUnOrdered()
await liveWallPage.postLiveInputBoxRemove()

        //input Post Live Text
        await liveWallPage.inputPostLiveText()

        await liveWallPage.standByInputBoxFonts()
await liveWallPage.standByInputBoxArial()
await liveWallPage.standByInputBoxBlocktype()
await liveWallPage.standByInputBoxNormal()
await liveWallPage.standByInputBoxBlocktype()

await liveWallPage.standByInputBoxBlockH1()
await liveWallPage.standByInputBoxBlocktype()

await liveWallPage.standByInputBoxBlockH2()
await liveWallPage.standByInputBoxBlocktype()

await liveWallPage.standByInputBoxBlockH3()
await liveWallPage.standByInputBoxBlocktype()

await liveWallPage.standByInputBoxBlockH4()
await liveWallPage.standByInputBoxBlocktype()

await liveWallPage.standByInputBoxBlockH5()
await liveWallPage.standByInputBoxBlocktype()

await liveWallPage.standByInputBoxBlockH6()
await liveWallPage.standByInputBoxBlocktype()

await liveWallPage.standByInputBoxBlockquote()
await liveWallPage.standByInputBoxBlocktype()

await liveWallPage.standByInputBoxBold()
await liveWallPage.standByInputBoxItalic()
await liveWallPage.standByInputBoxUnderline()
await liveWallPage.standByInputBoxsikethrough()
await liveWallPage.standByInputBoxColorpk()
await liveWallPage.standByInputBoxTextcl()
await liveWallPage.standByInputBoxGreencl()
await liveWallPage.standByInputBoxColorpk()

await liveWallPage.standByInputBoxHighlightcl()
await liveWallPage.standByInputBoxHighlightgrn()
await liveWallPage.standByInputBoxLeft()
await liveWallPage.standByInputBoxCenter()
await liveWallPage.standByInputBoxRight()
await liveWallPage.standByInputBoxOutdent()
await liveWallPage.standByInputBoxIndent()
await liveWallPage.standByInputBoxOrdered()
await liveWallPage.standByInputBoxUnOrdered()
await liveWallPage.standByInputBoxRemove()

        //input StandBy Message
        await liveWallPage.inputStandByMessage()


        //click Bold Option For PreLive Text
        await liveWallPage.clickBoldOptionForPreLiveText()


        await liveWallPage.lowConnectionMassageInputBoxFonts()
await liveWallPage.lowConnectionMassageInputBoxArial()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()
await liveWallPage.lowConnectionMassageInputBoxNormal()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()

await liveWallPage.lowConnectionMassageInputBoxBlockH1()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()

await liveWallPage.lowConnectionMassageInputBoxBlockH2()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()

await liveWallPage.lowConnectionMassageInputBoxBlockH3()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()

await liveWallPage.lowConnectionMassageInputBoxBlockH4()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()

await liveWallPage.lowConnectionMassageInputBoxBlockH5()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()

await liveWallPage.lowConnectionMassageInputBoxBlockH6()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()

await liveWallPage.lowConnectionMassageInputBoxBlockquote()
await liveWallPage.lowConnectionMassageInputBoxBlocktype()

await liveWallPage.lowConnectionMassageInputBoxBold()
await liveWallPage.lowConnectionMassageInputBoxItalic()
await liveWallPage.lowConnectionMassageInputBoxUnderline()
await liveWallPage.lowConnectionMassageInputBoxsikethrough()
await liveWallPage.lowConnectionMassageInputBoxColorpk()
await liveWallPage.lowConnectionMassageInputBoxTextcl()
await liveWallPage.lowConnectionMassageInputBoxGreencl()
await liveWallPage.lowConnectionMassageInputBoxColorpk()

await liveWallPage.lowConnectionMassageInputBoxHighlightcl()
await liveWallPage.lowConnectionMassageInputBoxHighlightgrn()
await liveWallPage.lowConnectionMassageInputBoxLeft()
await liveWallPage.lowConnectionMassageInputBoxCenter()
await liveWallPage.lowConnectionMassageInputBoxRight()
await liveWallPage.lowConnectionMassageInputBoxOutdent()
await liveWallPage.lowConnectionMassageInputBoxIndent()
await liveWallPage.lowConnectionMassageInputBoxOrdered()
await liveWallPage.lowConnectionMassageInputBoxUnOrdered()
await liveWallPage.lowConnectionMassageInputBoxRemove()

await liveWallPage.inputLowConnectionMassage()

        await page.waitForTimeout(4000)

        // })



})

test("009LW-006 | Validate Live Selfie Cam Link Open Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        await page.waitForTimeout(2000)


        //click Game Start Btn
        await liveWallPage.clickGameStartBtn()

        await page.waitForTimeout(2000)


        //click Live Selfie Cam Out Put Link
        await liveWallPage.clickLiveSelfieCamOutPutLink()

        //click Live Selfie Cam Out Put Link Copy Btn
        await liveWallPage.clickLiveSelfieCamOutPutLinkCopyBtn()


        await page.waitForTimeout(2000)




})

test("009LW-007 | Validate Live Selfie Cam OutPut Link open in Mobile", async ({ loginPage, liveWallPage, functions }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {


        // const browser = await webkit.launch({ headless: false });
        // const context = await browser.newContext({ ...devices['iPhone 12 Pro'] });
        // const page = await context.newPage();

        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({ ...devices["Pixel 5"], permissions: ["camera"] });
        const page = await context.newPage();

        await page.goto("/admin/#/sign-in");
        await page.fill("input[type='text']", "qa-1")
        await page.fill("input[type='password']", "mFkTylCDNC")

        await Promise.all([
                page.waitForNavigation(),
                page.click("button:has-text('Login')")
        ])


        await page.click("//p[text()='Live Wall']")


        await page.waitForTimeout(2000)


        const stopBtn = await page.frameLocator('iframe').locator("//button[text()='STOP']").isVisible()
        if ((stopBtn == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page.frameLocator('iframe')
                        .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
                        .click({ force: true })
        }

        await page.waitForTimeout(4000)

        const startBtn = await page.frameLocator('iframe').locator("//button[text()='START']").isVisible()
        if ((startBtn == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page.frameLocator('iframe')
                        .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
                        .click({ force: true })
        }



        const liveSelfieBtn = await page
                .frameLocator("iframe")
                .locator("(//h2[text()='Live Selfie Cam']/following-sibling::button)[1]");
        await liveSelfieBtn.click();

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
        ]);



        const nameField = await page1.locator('#usernameField').isVisible()
        if ((nameField == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page1
                        .locator('#usernameField')
                        .fill('Jon Doe');
        }

        const enterBtn = await page1.locator("text=Enter").isVisible()
        if ((enterBtn == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page1
                        .locator("text=Enter")
                        .click()
        }


        // let ele = await page1.locator('input[type="text"]').isVisible()
        // if ((ele == true)) {
        //         // console.log("Enable Stage to be skip and jump to next one")
        //         await page1
        //                 .locator('input[type="text"]')
        //                 .fill('Jon Doe');
        // }

        await page1.fill('[name="phone"]', "310-260-6620")

        await page1.fill('[name="email"]', "jon@email.com")
  
        await page1.fill('[name="age"]', "23")
  
        await page1.click('//input[@name="birthDate"]');
  
        await page1.waitForTimeout(5000)
  
        await page1.click("//button[text()='27']");
  
        await page1.click("//button[text()='OK']");
  
        await page1.fill('[name="zipCode"]', "1223")
  
        await page1.click("//button[text()='Submit']");
  
        await page1.waitForTimeout(2000)  


        await page1.click("//p[text()='USER PROFILE']");

        await page1.waitForTimeout(5000)


        await page1.click("//p[text()='RULES']");
        await page1.waitForTimeout(6000)


        await page1.click("//p[text()='HOW TO PLAY']");
        await page1.waitForTimeout(6000)



        await page1.click("//button[@value='prize']");

        await page1.waitForTimeout(5000)

        await page1.click("//p[text()='HOME']");
        await page1.waitForTimeout(20000)


        // await context.close()

        // })



})


test("009LW-008 | Validate Cue Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
        // const browser = await chromium.launch({ headless: false });
        // const context = await browser.newContext({permissions: ["camera"] });
        // const page = await context.newPage();



        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()



        //click Refresh Btn
        await liveWallPage.clickRefreshBtn()

        //click To Add Live Selfie Cam In Cue
        await liveWallPage.clickToAddLiveSelfieCamInCue()

        //click Cue Btn
        await liveWallPage.clickCueBtn()

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
        ]);


        // Click text=LiveAlertUncue >> button >> nth=0
        await page1.locator('text=LiveAlertUncue >> button').first().click();

        await page1.waitForTimeout(3000)

        // Click text=Next
        await page1.locator("//button[text()='Next']").click({force:true});

        // Click text=No streamsNext >> div
        await page1.locator('text=No streamsNext >> div').click();

        // //click Cue Open New Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()

        // //click To Add Live Selfie Cam In Cue
        // await liveWallPage.clickToAddCueToLiveSection()

        await page.waitForTimeout(2000)




})

test("009LW-009 | Validate OutPut Section", async ({ loginPage, liveWallPage, functions, page, context }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
        // const browser = await chromium.launch({ headless: false });
        // const context = await browser.newContext({permissions: ["camera"] });
        // const page = await context.newPage();



        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()



        //click Refresh Btn
        await liveWallPage.clickRefreshBtn()

        //   // Click text=LiveAlertUncue >> button >> nth=0
        // await page.locator('text=LiveAlertUncue >> button').first().click();

        // Click text=CueLiveDelete >> button >> nth=1
        await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').nth(1).click();



        //click Cue Btn
        await liveWallPage.clickOutPutBtn()

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
        ]);


        //                 // Click text=LiveAlertUncue >> button >> nth=0
        //   await page1.locator('text=LiveAlertUncue >> button').first().click();

        //   // Click text=Next
        //   await page1.locator('text=Next').click();

        //   // Click text=No streamsNext >> div
        //   await page1.locator('text=No streamsNext >> div').click();

        // //click Cue Open New Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()

        // //click To Add Live Selfie Cam In Cue
        // await liveWallPage.clickToAddCueToLiveSection()

        await page.waitForTimeout(6000)







})

test("009LW-0010 | Validate QR Code Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        //click Mobile QR Code
        await liveWallPage.clickMobileQRCode()


        //click Copy QR Code Btn
        await liveWallPage.clickCopyQRCodeBtn()


        //click Save QR Code Btn
        await liveWallPage.clickSaveQRCodeBtn()



        //click QR Code Window Close Btn
        await liveWallPage.clickQRCodeWindowCloseBtn()



        //click Refresh Btn
        // await liveWallPage.clickRefreshBtn()



        // //click Cue Btn
        // await liveWallPage.clickCueBtn()



        //click Cue OpenNew Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()



        //  //click Auto Rotation Check Box
        //  await liveWallPage.clickAutoRotationCheckBox()

        await page.waitForTimeout(2000)




})

test("009LW-0011 | Validate Analytics Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        //click Analytics Btn
        await liveWallPage.clickAnalyticsBtn()

        await page.waitForTimeout(3000)
        // //download Anlytics
        // await liveWallPage.downloadAnlytics()
        //click Analytics Page Back Btn
        await liveWallPage.clickAnalyticsPageBackBtn()
        //click Game Stop Btn
        await liveWallPage.clickGameStopBtn()

        await page.waitForTimeout(2000)




})



// })