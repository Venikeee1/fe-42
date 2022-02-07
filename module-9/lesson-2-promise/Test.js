const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    async function waitForSelectors(selectors, frame) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function waitForSelector(selector, frame) {
      if (selector instanceof Array) {
        let element = null;
        for (const part of selector) {
          if (!element) {
            element = await frame.waitForSelector(part);
          } else {
            element = await element.$(part);
          }
          if (!element) {
            throw new Error('Could not find element: ' + part);
          }
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('|'));
        }
        return element;
      }
      const element = await frame.waitForSelector(selector);
      if (!element) {
        throw new Error('Could not find element: ' + selector);
      }
      return element;
    }

    async function waitForElement(step, frame) {
      const count = step.count || 1;
      const operator = step.operator || '>=';
      const comp = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      };
      const compFn = comp[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        return compFn(elements.length, count);
      });
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (selector instanceof Array) {
        let elements = [];
        let i = 0;
        for (const part of selector) {
          if (i === 0) {
            elements = await frame.$$(part);
          } else {
            const tmpElements = elements;
            elements = [];
            for (const el of tmpElements) {
              elements.push(...(await el.$$(part)));
            }
          }
          if (elements.length === 0) {
            return [];
          }
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
          i++;
        }
        return elements;
      }
      const element = await frame.$$(selector);
      if (!element) {
        throw new Error('Could not find element: ' + selector);
      }
      return element;
    }

    async function waitForFunction(fn) {
      let isActive = true;
      setTimeout(() => {
        isActive = false;
      }, 5000);
      while (isActive) {
        const result = await fn();
        if (result) {
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }
    {
        const targetPage = page;
        await targetPage.setViewport({"width":1792,"height":566})
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('http://localhost:1234/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["body > article"]], targetPage);
        await element.click({ offset: { x: 156, y: 74} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["html"]], targetPage);
        await element.click({ offset: { x: 155, y: 157} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["html"]], targetPage);
        await element.click({ offset: { x: 155, y: 157} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["html"]], targetPage);
        await element.click({ offset: { x: 314, y: 189} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["html"]], targetPage);
        await element.click({ offset: { x: 315, y: 189} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["html"]], targetPage);
        await element.click({ offset: { x: 504, y: 188} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["html"]], targetPage);
        await element.click({ offset: { x: 504, y: 188} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["html"]], targetPage);
        await element.click({ offset: { x: 691, y: 181} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["body > article"]], targetPage);
        await element.click({ offset: { x: 517, y: 96} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["html"]], targetPage);
        await element.click({ offset: { x: 34, y: 44} });
    }

    await browser.close();
})();
