const mysql =require('mysql')
const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'133@Sangeeta',
    database:'Merarki_db'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log('Dtabase Connected')

})

module.exports=conn