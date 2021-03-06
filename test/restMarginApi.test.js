import RestMarginApi from '../src/RestMarginApi'
import chai from 'chai'
import log4js, { Logger } from 'log4js'
let expect = chai.expect
describe('RestMarginApi 测试 ', function () {

    log4js.configure({
        appenders: {
            console: { type: 'console' }
        },
        categories: { default: { appenders: ['console'], level: 'all' } }
    })
    let loggger = log4js.getLogger()


    let restMarginApi = new RestMarginApi("https://www.okex.com", "", "", "")
    it('getEttAccounts', function (done) {
        restMarginApi.getMarginAccounts().then(function (res) {
            res.json().then(function (json) {
                loggger.debug(json)
            })
            expect(res.status).to.eq(200)
            done()
        })
    })
});