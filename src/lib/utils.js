export const getCenterBox = (el) => {
  const box = el.getBoundingClientRect();
  return {
    x: (box.left + box.right) / 2,
    y: (box.top + box.bottom) / 2,
  };
};

export const sortApps = (a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
};

export const calculateAppsDict = (apps) => {
  const appsDict = {};
  apps.forEach((app) => {
    const fisrtChar = app.name.charAt(0).toUpperCase();
    if (!appsDict[fisrtChar]) appsDict[fisrtChar] = [app];
    else appsDict[fisrtChar] = appsDict[fisrtChar].concat(app);
  });
  return appsDict;
};
