const { hello } = require('./hello')

describe('initial set up', () => {
  it('should say world', () => {
    expect(hello()).toBe('world')
  })
})
