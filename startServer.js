const spawn = require('child_process').spawn

const server = spawn('npm', ['start'], {
  detached: true,
  stdio: 'inherit',
})

process.stdin.resume()

function exitHandler(status) {
  process.kill(-server.pid)
  process.exit(status)
}

process.on('exit', exitHandler.bind(null, 0))
process.on('SIGINT', exitHandler.bind(null, 0))
process.on('uncaughtException', exitHandler.bind(null, 1))
