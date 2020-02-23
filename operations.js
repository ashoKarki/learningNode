// contains database operations in this page 
const assert = require('assert')

exports.insertDocument = (db, document, collection, callback) => {

    const coll = db.collection(collection)
    console.log(document);
    
    coll.insert(document,(err,resposnse)=>{
        assert.equal(err,null)
        console.log('====================================')
        console.log('inserted'+resposnse.result.n +'documents into collection'+collection )
        console.log('====================================')
        callback(resposnse)
    })
    
}

exports.findDocuments = (db, collection, callback) => {
    
    const coll = db.collection(collection)
    coll.find({}).toArray((err,result)=>{
        assert.equal(err,null)
        callback(result)
    })

}
exports.removeDocument = (db, document, collection, callback) => {
    
    const coll = db.collection(collection)
    coll.deleteOne(document,(err,result)=>{
        assert.equal(err,null)
        console.log('====================================');
        console.log('removed the document', document );
        console.log('====================================');
        callback(result)
    })

}
exports.updateDocument = (db, document, update, collection, callback) => {
    
    const coll = db.collection(collection)
    coll.updateOne(document,{$set:update},null,(err,result)=>{
        assert.equal(err,null)
        console.log('====================================');
        console.log('updated the document wiht',update);
        console.log('====================================');
        callback(result)
    })
}