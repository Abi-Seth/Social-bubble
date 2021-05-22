const { remote } = require('electron')

exports.exit = () => {
    window.close()
}

exports.min = () => {
    remote.BrowserWindow.getFocusedWindow().minimize();
}

exports.fit = () => {
    // window.resizeTo(screen.width, screen.height)
    remote.BrowserWindow.getFocusedWindow().maximize();
}

exports.float = () => {
    remote.BrowserWindow.getFocusedWindow().unmaximize();
}
