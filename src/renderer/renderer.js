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

exports.getSite = () => {
    const {shell} = require('electron')
    const webview = document.querySelector('webview')
    webview.addEventListener('will-navigate', (e) => {
    const protocol = require('url').parse(e.url).protocol
    if (protocol === 'http:' || protocol === 'https:') {
        shell.openExternal(e.url)
    }
});
}