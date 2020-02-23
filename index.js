const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const dbOperation = require('./operations')


const url = 'mongodb://localhost:27017/'
const dbName = 'conFusion'

MongoClient.connect(url,(err,client)=>{

    assert.equal(err,null)
    console.log('====================================');
    console.log('connected to the server successfully');
    console.log('====================================');

    const db  = client.db(dbName)
    dbOperation.insertDocument(db,{name:'ashok',class : '12',faculty:'testing univ'},'student', (result)=>{
        console.log('====================================');
        console.log('insert \n');
        console.log(result.ops);
        console.log('====================================');
        dbOperation.findDocuments(db,'student',(result)=>{
            console.log('====================================');
            console.log('found datas\n');
            console.log(result);
            console.log('====================================');
            dbOperation.updateDocument(db, { name: 'ashok' }, { class: 'masters' },'student',(result)=>{
                console.log('====================================');
                console.log('updated ',result.result);
                console.log('====================================');
                dbOperation.findDocuments(db, 'student', (result) => {
                    console.log('====================================');
                    console.log('found datas\n');
                    console.log(result);
                    console.log('====================================');
                    db.dropCollection('student',(result)=>{
                        console.log('====================================');
                        console.log('collection dropped',result);
                        console.log('====================================');
                        client.close()
                        
                    })
                })
            })
        })
    })
})