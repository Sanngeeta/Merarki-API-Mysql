const knex=require('../config/table')
const fs=require('fs')
const axios=require('axios')
const redline=require("readline-sync")
const marakiData=axios.get('https://api.merakilearn.org/courses ')
    .then((res)=>{
        let data=(res.data)
        let jsonData=JSON.stringify(data,null,5)
        fs.writeFileSync('saral.json',jsonData)
    })


const data=fs.readFileSync('saral.json','utf8')
const saralData=JSON.parse(data)
for (i of saralData){
    saral=[i]
    knex('saraltable').insert(saral).then(()=>{
        console.log({success:'insert data successfully'})
    }).catch((err)=>{
        console.log(err);throw err
    })
}



const saral_data=saralData
arry=[]
for(i of saral_data){
        const id=i.id
        const name=i.name
        const logo=i.logo
        const notes=i.notes
        const days_to_complete=i.days_to_complete
        const short_description=i.short_description
        const type=i.type
        const course_type=i.course_type
        const lang_available=i.lang_available

        const dict={id:id,name:name,logo:logo,notes:notes,days_to_complete:days_to_complete,short_description:short_description,type:type,course_type:course_type,lang_available:lang_available}
        arry.push(dict)
        // console.log(arry)
        knex('saraltable').insert(arry).then(()=>{
            console.log({success:'insert data successfully'})
        }).catch((err)=>{
            console.log(err);throw err
        })
    }

    