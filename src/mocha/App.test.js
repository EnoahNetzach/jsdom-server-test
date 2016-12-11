import assert from 'assert'
import initDOM from '../initDOM'

const runTimes = process.env.E2E_TIMES || 0
for (let i = 0; i < runTimes; i++) {
  it('runs #' + i, async () => {
    const doc = await initDOM()

    assert.equal(1, doc.getElementsByClassName('App-intro').length)
  })
}
