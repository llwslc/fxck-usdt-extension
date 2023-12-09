// https://www.binance.com/zh-CN/trade/TUSD_USDT?type=spot

const TIPS_ID = 'usdt_tips';

const appendTips = () => {
  const existing = document.getElementById(TIPS_ID);
  if (existing) {
    return;
  }

  const tips = document.createElement('h1');
  tips.id = TIPS_ID;
  const text = document.createTextNode('USDT');
  tips.appendChild(text);
  document.body.appendChild(tips);
};

const removeTips = () => {
  const existing = document.getElementById(TIPS_ID);
  if (existing) {
    existing.parentNode.removeChild(existing);
  }
};

const checkUrl = () => {
  const { URL } = document;
  const urls = URL.split('?')[0].split('/');
  if (!urls.includes('trade')) return false;

  const pair = urls.pop().split('_');
  if (pair.length > 1) {
    if (!pair[0].includes('USD') && pair[1] === 'USDT') return true;
  }
};

const main = () => {
  if (checkUrl()) {
    appendTips();
  } else {
    removeTips();
  }
  setTimeout(main, 1000);
};

main();
