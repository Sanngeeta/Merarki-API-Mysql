const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        user:'root',
        port:3306,
        password:'133@Sangeeta',
        database:'Merarki_db'
    }
})
knex.schema.createTable('saraltable',(table)=>{
    table.increments('id').primary()
    table.string('name')
    table.string('logo')
    table.string('notes')
    table.integer('days_to_complete')
    table.string('short_description')
    table.string('type')
    table.string('course_type')
    table.string('lang_available')
}).then(()=>{
    console.log('Table is created')
}).catch((err)=>{
    console.log('Table alreday')
})




module.exports=knex
