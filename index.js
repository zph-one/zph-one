fetch("https://c4.yonyoucloud.com/mdf-node/fragment/PND6MEF6ST5AAACList?domainKey=developPlatform&busiObj=PND6MEF6ST5AAAC&terminalType=1&serviceCode=025042491d684745aaa994c171f60fe3&feV=6")
  .then(response => response.json())
  .then(data => {
    console.log("API返回数据:", data);
    window.API_DATA = data; // 存储到全局变量
  })
  .catch(error => {
    console.error("请求失败:", error);
  });
