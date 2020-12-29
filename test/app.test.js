const server = require('../src/server');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();




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


describe('/api/timestamp/abc', () => {
    it('An error paramter should return property error and  value of Invalid Date', (done) => {
        chai.request(server)
            .get('/api/timestamp/abc')
            .end((err, res) =>{
                res.body.should.have.property('error');
                res.body.error.should.be.equal('Invalid Date');
                done();
            })
    })
})


describe('/api/timestamp/2020-12-05', () =>{
    it('it should return a JSON object with a utc key and a value of Fri, 25 Dec 2015 00:00:00 GMT', (done) => {
        chai.request(server)
            .get('/api/timestamp/2020-12-05')
            .end((err, res) => {
                res.body.should.have.property('utc');
                res.body.utc.should.be.equal('Fri, 25 Dec 2015 00:00:00 GMT');
                done();
            });
    })

});


describe('/api/timestamp/2020-12-05', () =>{
    it('it should return a JSON object with a unix key and value in milliseconds of 1607126400000', (done) => {
        chai.request(server)
            .get('/api/timestamp/2020-12-05')
            .end((err, res) => {
                res.body.should.have.property('unix');
                res.body.unix.should.be.equal(1607126400000);
                done();
            });
    })

});


describe('/api/timestamp/', () =>{
    it('/api/timestamp should have a unix and utc property', (done) => {
        chai.request(server)
            .get('/api/timestamp/')
            .end((err, res) => {
                res.body.should.have.property('unix');
                res.body.should.have.property('utc');
                done();
            });
    })

});


describe('/api/timestamp/', () =>{
    it('/api/timestamp should have  valid respective values in millisecond and valid date utc format', (done) => {
        chai.request(server)
            .get('/api/timestamp/')
            .end((err, res) => {
                var unix = res.body.unix;
                var utc = res.body.utc;
                var validUnix = (new Date(unix)).getTime() > 0;
                var validUtc = (new Date(utc)).getTime() > 0; 
                validUnix.should.be.true;
                validUtc.should.be.true;
                done();
            });
    })

});


describe('/api/timestamp/1451001600000', () =>{
    it('it should return a JSON object with a utc key and a value of Fri, 25 Dec 2015 00:00:00 GMT', (done) => {
        chai.request(server)
            .get('/api/timestamp/1451001600000')
            .end((err, res) => {
                res.body.should.have.property('utc');
                res.body.utc.should.be.equal('Fri, 25 Dec 2015 00:00:00 GMT');
                done();
            });
    })

});


describe('/api/timestamp/1451001600000', () =>{
    it('it should return a JSON object with a unix key and value in milliseconds of 1607126400000', (done) => {
        chai.request(server)
            .get('/api/timestamp/1451001600000')
            .end((err, res) => {
                res.body.should.have.property('unix');
                res.body.unix.should.be.equal(1607126400000);
                done();
            });
    })

});





