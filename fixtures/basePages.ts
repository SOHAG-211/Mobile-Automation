import LoginPage from "@pages/Login.page";
import MobileDesign from "@pages/mobileDesign.page";
import languagePage from "@pages/language.page";
import { test as baseTest } from "@playwright/test";
import menuPage from "@pages/menu.page";
import singupPage from "@pages/signup.page";
import globalPrizingPage from "@pages/globalPrizing.page";
import tugOfWarPage from "@pages/tugOfWar.page"
import functions from "@testData/func";
import prizeDropPage from "@pages/prizeDrop.page";
import liveWallPage from "@pages/liveWall.page";
import arcadePage from "@pages/arcade.page";
import addnewexperiencePage from "@pages/AddNewexperiences.page";
import echoPage from "@pages/Echologyxldt.page";
import echoPageMob from "@pages/MobEchologyxltd.page";





const test = baseTest.extend<{
    loginPage: LoginPage;
    MainMenu: MobileDesign;
    languagePage: languagePage;
    menuPage: menuPage;
    singupPage: singupPage;
    globalPrizingPage: globalPrizingPage;
    tugOfWarPage: tugOfWarPage;
    prizeDropPage: prizeDropPage;
    liveWallPage: liveWallPage;
    functions: functions;
    arcadePage: arcadePage;
    addnewexperiencePage: addnewexperiencePage;
    echoPage: echoPage;
    echoPageMob: echoPageMob;

}>({
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    MainMenu: async ({ page }, use) => {
        await use(new MobileDesign(page));
    },

    languagePage: async ({ page }, use) => {
        await use(new languagePage(page));
    },

    menuPage: async ({ page }, use) => {
        await use(new menuPage(page));
    },

    singupPage: async ({ page }, use) => {
        await use(new singupPage(page));
    },

    globalPrizingPage: async ({ page }, use) => {
        await use(new globalPrizingPage(page));
    },
    tugOfWarPage: async ({ page }, use) => {
        await use(new tugOfWarPage(page));
    },
    prizeDropPage: async ({ page }, use) => {
        await use(new prizeDropPage(page));
    },

    liveWallPage: async ({ page }, use) => {
        await use(new liveWallPage(page));
    },
    arcadePage: async({ page }, use ) =>{
        await use(new arcadePage(page))
    },
    addnewexperiencePage: async ({ page }, use) => {
        await use(new addnewexperiencePage(page));
     },

     echoPage: async ({ page, isMobile }, use) => {
        await use(new echoPage(page, isMobile));
     },
     echoPageMob: async ({ page, isMobile }, use) => {
        await use(new echoPageMob(page, isMobile));
     },
    
    
    
})
export default test;
export const expect = test.expect;

// var a;
// var b: string;

// type pages=  {
//     loginPage: LoginPage;
//     headerPage: HeaderPage;
//     commonPage: CommonFunctions;
// }
