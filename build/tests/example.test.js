"use strict";

var _mochaSteps = require("mocha-steps");

var _builder = require("../builder");

var _builder2 = _interopRequireDefault(_builder);

var _chai = require("chai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import puppeteer from "puppeteer";

describe("Mocha steps demo", function () {
  var page = void 0;

  before(async function () {
    // browser = await puppeteer.launch({ headless: true });
    page = await _builder2.default.build("Desktop");
    // await page.setDefaultTimeout(7000);
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)("should load google homepage", async function () {
    await page.goto("http://zero.webappsecurity.com/index.html");
    var signInButton = await page.isElementVisible("#signin_button");
    (0, _chai.expect)(signInButton).to.be.true;
  });
});