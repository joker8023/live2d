module.exports = () => {
  // From https://www.showdoc.cc/justapi?page_id=957480307312713

  (() => {
    live2d.showMessage('[yiwen] 请求中...', 10000, 12);
    fetch('https://interface.meiriyiwen.com/article/today?dev=1')
      .then(response => response.json())
      .then(data => {
        console.log('data.data.content: ', data.data.content);
        live2d.showMessage(data.data.content, 8000, 12);
      });
  })();

  return () => {
    //
  };
};
