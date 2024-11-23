const handleEventListener = (eventType, callback) => {
  return () => {
    addEventListener(eventType, callback);

    return () => {
      removeEventListener(eventType, callback);
    };
  };
};

const handleInterval = (callback, timePeriod) => {
  return () => {
    let newAnimation = setInterval(callback, timePeriod);

    return () => {
      clearInterval(newAnimation);
    };
  };
};

const handleTimeOut = (callback, timePeriod) => {
  return () => {
    let newAnimation = setTimeout(callback, timePeriod);

    return () => {
      clearTimeout(newAnimation);
    };
  };
};

const handleKeyDown = (key, callback) => {
  return () => {
    const keyDownCallback = (event) => {
      if (event.key === key) {
        callback();
      }
    };

    addEventListener("keydown", keyDownCallback);

    return () => {
      removeEventListener("keydown", keyDownCallback);
    };
  };
};

export { handleEventListener, handleInterval, handleTimeOut };
