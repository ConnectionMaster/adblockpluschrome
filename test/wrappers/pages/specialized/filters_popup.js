/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

const {By} = require("selenium-webdriver");

exports.run = async function(driver, section, description)
{
  let nHandles = (await driver.getAllWindowHandles()).length;
  await section.findElement(By.css("a[href],button")).click();
  await driver.sleep(500);
  await driver.wait(
    async() => (await driver.getAllWindowHandles()).length <= nHandles,
    2000, description
  );
};
