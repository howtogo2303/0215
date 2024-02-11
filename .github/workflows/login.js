const puppeteer = require('puppeteer');

async function login(username, password) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 导航到登录页面
  await page.goto('https://www.alwaysdata.com/login/');

  // 填写登录表单
  await page.type('#username', username);
  await page.type('#password', password);

  // 提交表单
  await page.click('button[type="submit"]');

  // 等待登录完成
  await page.waitForNavigation();

  // 登录后执行其他操作，例如在已登录页面上执行操作

  // 关闭浏览器
  await browser.close();
}

// 定义多个账号
const accounts = [
  { username: 'cool@tzhy.tk', password: '123123123aA@@@' },
  { username: 'ggg12345@zjtz.tk', password: '1234512345aA@@' },
  { username: 'bbbb123@tzhy.tk', password: '123123123aA@@@' },
  { username: 'yyyyopopop@gmail.com', password: '12351235aW@@' },
  { username: 'free123@ttt0090.tk', password: '1235812358aA@' },
];

// 使用每个账号登录
async function run() {
  for (const account of accounts) {
    await login(account.username, account.password);
  }
}

// 运行脚本
run();
