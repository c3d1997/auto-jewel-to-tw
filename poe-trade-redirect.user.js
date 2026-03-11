// ==UserScript==
// @name         POE 永恆珠寶 台服跳轉
// @description  自動將 pathofexile.com 的 Trade 搜尋跳轉至 pathofexile.tw
// @version      1.0
// @author
// @match        *://www.pathofexile.com/trade/*
// @run-at       document-start
// ==/UserScript==

const url = new URL(location.href);
url.hostname = 'pathofexile.tw';
location.replace(url.toString());
