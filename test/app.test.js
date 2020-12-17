const server = require('../src/server');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();



const currentDate = new Date('5 December 2020')
console.log(currentDate);



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

describe('/api/timestamp/2020-12-05', () =>{
    it('it should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds', (done) => {
        chai.request(server)
            .get('/api/timestamp/2020-12-05')
            .end((err, res) => {
                res.body.should.have.property('unix');
                console.log(res.body.unix);
                res.body.unix.should.be.equal('1608200080404');
                res.should.have.status(200);
                done();
            });
    })

});
