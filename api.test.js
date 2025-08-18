const app = require('./index.js')
const supertest = require('supertest')
const request = supertest(app)

test('testing if jest works', () => {
    expect(1).toBe(1)
})

test('Testing root endpoint', async () => {
    const res = await request.get('/')
    const message = res.body.message
    expect(message).toBe('hi!!')
})


test('test fruit-check', async () => {
  const res = await request.get('/fruit-check').query({fruit:"Apple"})
  const result = res.text
  expect(result).toBe("Fruit already exists")

}