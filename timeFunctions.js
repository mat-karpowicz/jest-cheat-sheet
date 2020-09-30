const timeFunctions = {
  openDatabase: () => console.log("database connected"),
  closeDatabase: () => console.log("database closed"),
  checkBeforeDescribe: () => console.log("checked before describe"),
  checkAfterDescribe: () => console.log("checked after describe"),
};

module.exports = timeFunctions;
