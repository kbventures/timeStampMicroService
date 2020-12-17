const server = require('../src/server');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

const currentDate = new Date('5 December 2020')

describe('/', () => {
    it('it should return 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
});



/*
A request to /api/timestamp/:date? with a valid date should return 
a JSON object with a unix key that is a Unix timestamp of the input date
 in milliseconds
*/



// describe('/api/timestamp/', () => {
//     it('An empty data parameter should return the current time in JSON object with unix key', (done) => {
//         chai.request(server)
//             .get('/api/timestamp/')
//             .end((err, res) =>{
//                 res.body.unix.should.be.equal('undefined');
//                 res.should.have.status(200);
//                 done();
//             })
//     })
// })

describe('/api/timestamp/2020-12-05', () =>{
    it('it should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds', (done) => {
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


// describe('/api/timestamp/1451001600000', () =>{
//     it('it should return {unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }', (done) => {
//         chai.request(server)
//             .get('api/timestamp/1451001600000')
//             .end((err, res) => {
//                 res.body.should.have.property(unix);
//                 res.body.unix.should.be.equal(1451001600000);
//                 res.should.have.status(200);
//                 done();
//             })
//     })

// })



