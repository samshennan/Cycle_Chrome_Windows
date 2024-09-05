chrome.commands.onCommand.addListener((command) => {
  if (command === "cycle_windows") {
    chrome.windows.getAll({ populate: true }, (windows) => {
      let currentIndex = windows.findIndex(window => window.focused);
      let nextIndex = (currentIndex + 1) % windows.length;
      chrome.windows.update(windows[nextIndex].id, { focused: true });
    });
  }
});