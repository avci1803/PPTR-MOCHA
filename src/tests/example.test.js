import { step } from "mocha-steps";
//import puppeteer from "puppeteer";

import Page from "../builder";
import { expect } from "chai";
import LoginPage from "../pages/LoginPage";

describe("Mocha steps demo", () => {
  let page;
  let loginPage;

  before(async () => {
    // browser = await puppeteer.launch({ headless: true });
    page = await Page.build("Desktop");
    // await page.setDefaultTimeout(7000);
    loginPage = new LoginPage(page);
  });

  after(async () => {
    await page.close();
  });

  step("should load google homepage", async () => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    const signInButton = await page.isElementVisible("#signin_button");
    expect(signInButton).to.be.true;
  });

  step("should display login form", async () => {
    await page.waitAndClick("#signin_button");
    const loginForm = await page.isElementVisible("#login_form");
    expect(loginForm).to.be.true;
    const signInButton = await page.isElementVisible("#signin_button");
    expect(signInButton).to.be.false;
  });
  step("should login to application", async () => {
    await loginPage.login("username", "password");
    expect(await page, isElementVisible(".nav-tabs")).to.be.true;
  });
});
