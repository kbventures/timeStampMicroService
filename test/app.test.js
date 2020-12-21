const server = require('../src/server');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

const currentDate = new Date('5 December 2020')





describe('/', () => {
    it('/ it should return 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
});



// Error status code needs to be aded to timestamp module
describe('/api/timestamp/abc', () => {
    it('An error paramter should return property error:Invalid Date and error status code', (done) => {
        chai.request(server)
            .get('/api/timestamp/abc')
            .end((err, res) =>{
                console.log(res.body)
                res.body.should.have.property('error');
                res.body.error.should.be.equal('Invalid Date');
                res.should.have.status(200);
                done();
            })
    })
})

describe('/api/timestamp/2020-12-05', () =>{
    it('it should return a JSON object with a unix and utc as well as corresponding millisecond and utc value', (done) => {
        chai.request(server)
            .get('/api/timestamp/2020-12-05')
            .end((err, res) => {
                res.body.should.have.property('unix');
                res.body.unix.should.be.equal(1607126400000);
                res.body.should.have.property('utc');
                res.body.utc.should.be.equal("Sat, 05 Dec 2020 00:00:00 GMT")
                res.should.have.status(200);
                done();
            });
    })

});


describe('/api/timestamp/', () =>{
    it('/api/timestamp should have a unix and utc property, a valid timestamp in millisecond and valid', (done) => {
        chai.request(server)
            .get('/api/timestamp/')
            .end((err, res) => {
                res.body.should.have.property('unix');
                res.body.should.have.property('utc');
                var unix = res.body.unix;
                var utc = res.body.utc;
                var validUnix = (new Date(unix)).getTime() > 0;
                var validUtc = (new Date(utc)).getTime() > 0; 
                validUnix.should.be.true;
                validUtc.should.be.true;
                res.should.have.status(200);
                done();
            });
    })

});


describe('/api/timestamp/1451001600000', () =>{
    it('it should have a unix and utc property as well as a corresponding unix in millisecond and utc value', (done) => {
        chai.request(server)
            .get('/api/timestamp/1451001600000')
            .end((err, res) => {
                res.body.should.have.property('unix');
                res.body.unix.should.be.equal(1451001600000);
                res.body.should.have.property('utc');
                res.body.utc.should.be.equal('Fri, 25 Dec 2015 00:00:00 GMT');
                res.should.have.status(200);
                done();
            });
    })

});



