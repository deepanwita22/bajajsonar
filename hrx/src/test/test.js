let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;
let chaiParam = require('chai-param');
chai.use(chaiHttp);
param = chaiParam.param;

chai.use(chaiParam);

const users = require("../../static_files/app_init.json"); 
//const myfile = JSON.parse(users);

let server = require('../app');



var i,j;

var primarykeys = [];
   for(var k in users[0].data) primarykeys.push(k);
   
var keys = [];
for(var k in users[0].data.data[0]) keys.push(k);

var on_click_cta=[]
  for(var k in users[0].data.data[0].on_click_cta) on_click_cta.push(k);

var clevertap=[]
  for(var k in users[0].data.data[0].on_click_cta.clevertap) clevertap.push(k);
  
 var property=[]
 for(var k in users[0].data.data[0].on_click_cta.clevertap.property) property.push(k);

describe('Podcast', () => {
 describe('/GET /v1/app', () => {
     it('it should check if the status code is 200', (done) => {
     chai.request(server)
       .get('/v1/app')
       .end((err, res) => {
             (res).should.have.status(200); 
            
             done();
          });
       });
  });

});


describe('Podcast', () => {
    describe('/GET /v1/app', () => {
        it('it should check if the response is an object', (done) => {
        chai.request(server)
          .get('/v1/app')
          .end((err, res) => {
                (res.body).should.be.a('object');
              done();
             });
          });
     });
     
   });
   

   describe('Podcast', () => {
    describe('/GET /v1/app', () => {
        it('it should check whether the data has proper properties', (done) => {
        chai.request(server)
          .get('/v1/app')
          .end((err, res) => {
               
                expect(res.body).to.have.property('data');
                expect(res.body).to.have.property('is_success').to.equal(true);
                expect(res.body.data).to.have.property('sections').to.be.an('array').with.lengthOf(4);
                for (i = 0; i < users.length; i++) {
                  expect(res.body.data.sections[i]).to.have.property('type');  
                } 
                for (i = 0; i < users.length; i++) {
                  expect(res.body.data.sections[i].data).to.have.property(primarykeys[0]);
                  expect(res.body.data.sections[i].data).to.have.property(primarykeys[1]);
                  expect(res.body.data.sections[i].data).to.have.property(primarykeys[2]);
                  } 
                done();
             });
          });
     });
     
   });

   describe('Podcast', () => {
    describe('/GET /v1/app', () => {
        it('it should check if the keys match ', (done) => {
        chai.request(server)
          .get('/v1/app')
          .end((err, res) => {
          
          //console.log(JSON.stringify(users[data]));
          //console.log(JSON.stringify(res.body.data));

        for (i = 0; i < users.length; i++) {
          expect(res.body.data.sections[i].type).to.equal(users[i].type);
        } 

       for (i = 0; i < users.length; i++) {
          for(j=0;j<users[i].data.data.length;j++)
          {

          var obj1 = (Object.keys(res.body.data.sections[i].data.data[j]));
          for(var k=0;k<keys.length;k++)
          {
           expect(obj1[k]).to.equal(keys[k]);
          }
         var obj2 = (Object.keys(res.body.data.sections[i].data.data[j].on_click_cta));
        for(var k=0;k<on_click_cta.length;k++)
        {
         expect(obj2[k]).to.equal(on_click_cta[k]);
        }
        var obj3 = (Object.keys(res.body.data.sections[i].data.data[j].on_click_cta.clevertap));
        for(var k=0;k<clevertap;k++)
       {
         expect(obj3[k]).to.equal(clevertap[k]);
        }
        var obj4 = (Object.keys(res.body.data.sections[i].data.data[j].on_click_cta.clevertap.property));
        for(var k=0;k<property;k++)
        {
          expect(obj4[k]).to.equal(property[k]);
         }
       }
       }
        done();
            });
        });
     }); 
   }); 

   describe('Podcast', () => {
    describe('/GET /v1/app', () => {
        it('it should check the if values match', (done) => {
        chai.request(server)
          .get('/v1/app')
          .end((err, res) => {
        for (i = 0; i < users.length; i++) {
          (res.body.data.sections[i].data).should.be.a('object');
          } 
          for (i = 0; i < users.length; i++) {
            expect(res.body.data.sections[i].data.header).to.equal(users[i].data.header);
            expect(res.body.data.sections[i].data.aspect_ratio).to.equal(users[i].data.aspect_ratio);
            } 
        for (i = 0; i < users.length; i++) {
            for(j=0;j<users[i].data.data.length;j++)
            {
          expect(res.body.data.sections[i].data.data[j].id).to.equal(users[i].data.data[j].id);
          expect(res.body.data.sections[i].data.data[j].is_new).to.equal(users[i].data.data[j].is_new);
          expect(res.body.data.sections[i].data.data[j].banner_url).to.equal(users[i].data.data[j].banner_url);
          expect(res.body.data.sections[i].data.data[j].label).to.equal(users[i].data.data[j].label);
          expect(res.body.data.sections[i].data.data[j].on_click_cta.profile_seletor).to.equal(users[i].data.data[j].on_click_cta.profile_seletor);
          expect(res.body.data.sections[i].data.data[j].on_click_cta.type).to.equal(users[i].data.data[j].on_click_cta.type);
          expect(res.body.data.sections[i].data.data[j].on_click_cta.value).to.equal(users[i].data.data[j].on_click_cta.value);
         expect(res.body.data.sections[i].data.data[j].on_click_cta.clevertap.event_name).to.equal(users[i].data.data[j].on_click_cta.clevertap.event_name);
         expect(res.body.data.sections[i].data.data[j].on_click_cta.clevertap.property.Card_name).to.equal(users[i].data.data[j].on_click_cta.clevertap.property.Card_name);
          }
        }
        
        done();
            });
        });
     }); 
   }); 