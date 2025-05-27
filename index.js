fetch("https://c4.yonyoucloud.com/iuap-yonbuilder-designer/ucf-wh/builder/nocode/index.html?appId=2276643142883606538&pageId=2276643254552756240&locale=zh_CN&refimestamp=1,748,306,881#/nocode/page/dataManage")
  .then(response => response.json())
  .then(data => {
    console.log("API返回数据:", data);
    window.API_DATA = data; // 存储到全局变量
  })
  .catch(error => {
    console.error("请求失败:", error);
  });
