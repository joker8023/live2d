module.exports = () => {
  const TIME_OUT = 25 * 60 * 1e3; // 25 minutes

  let timer = null;

  const handleWindowBlur = () => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      live2d.showMessage('Take a break~~', 8000, 20);
    }, TIME_OUT);
  };

  const handleWindowFocus = () => {
    timer && clearTimeout(timer);
  };

  live2d.on('blur', handleWindowBlur);
  live2d.on('focus', handleWindowFocus);

  return () => {
    live2d.removeListener('blur', handleWindowBlur);
    live2d.removeListener('focus', handleWindowFocus);
  };
};
