const { execSync } = require('child_process');

// 安装 puppeteer 依赖
try {
  execSync('npm install puppeteer');
} catch (error) {
  console.error('安装 puppeteer 失败:', error);
  process.exit(1);
}

const puppeteer = require('puppeteer');

async function login(username, password) {
  const browser = await puppeteer.launch();
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
  { username: 'username1', password: 'password1' },
  { username: 'username2', password: 'password2' },
  { username: 'username3', password: 'password3' },
  { username: 'username4', password: 'password4' },
  { username: 'username5', password: 'password5' },
];

// 使用每个账号登录
async function run() {
  for (const account of accounts) {
    await login(account.username, account.password);
  }
}

// 运行脚本
run();
