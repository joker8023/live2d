module.exports = () => {
  // From https://www.showdoc.cc/justapi?page_id=957586290908547

  const handleWindowBlur = () => {
    live2d.showMessage('[一言] 请求中...', 10000, 12);
    fetch('https://v1.jinrishici.com/all.json')
      .then(response => response.json())
      .then(data => {
        console.log('data.content: ', data.content);
        live2d.showMessage('[一言]' + data.content, 8000, 12);
      });
  };

  live2d.on('blur', handleWindowBlur);

  return () => {
    live2d.removeListener('blur', handleWindowBlur);
  };
};
