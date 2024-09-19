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


test('Testing recommend endpoint', async () => {
    const res = await request.get('/recommend').query({'type':'fruits'})
    const message = res.body.recommendation
    expect(message).toBe('Apple')
})

test('Testing fruit-check', async () => {
    const res = await request.get('/fruit-check').query({'fruit':'Papaya'})
    const message = res.text
    expect(message).toBe('Fruit already exists')
    return;
})