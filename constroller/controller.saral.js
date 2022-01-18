const knex=require('../config/table')
// const conn=require('../config/database')

get_saraldata=(req,res)=>{
    knex.select('*').from('saraltable')
    .then((data)=>{
        res.send({message:'Get saral data successfully!',merarki:data})
    }).catch((err)=>{
        res.send({error:'Not found data',err:err})
        res.status(401)
    })
}


post_saraldata=(req,res)=>{
    const saral_post_data={
        logo:req.body.logo,
        name:req.body.name,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.body.type,
        course_type:req.body.course_type,
        lang_available:req.bodylang_available     
    }
    knex('saraltable').insert(saral_post_data)
    .then((data)=>{
        knex.select('*').from('saraltable').where('id',data)
        .then((postdata)=>{
            res.send({message:'insert data successfully',created:postdata})
        }).catch((err)=>{
            res.send({error:'data not inserted',err:err})
            res.status(401)
        })

    }).catch((err)=>{
        res.send({message:'id already exits'})
    })
    
}

    

    

update_saraldata=(req,res)=>{
    knex('saraltable').where('id','=',req.params.id).update({
        name:req.body.name,
        logo:req.body.logo,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.body.type,
        course_type:req.body.course_type,
        lang_available:req.bodylang_available  
    
    })

    .then((updatedata)=>{
        console.log(updatedata)
        res.send({meassge:`data updated successfully`,update_data:{name:req.body.name}})
    }).catch((err)=>{
        console.log({error:'You token invalid id',err:err})
    })
}




deleteByid=(req,res)=>{
    knex.delete('*').from('saraltable').where('id','=',req.params.id)
    .then((data)=>{
        console.log(data)
        knex.select('*').from('saraltable').where('id',data)
        .then((delData)=>{
            console.log(delData)
            res.send({delete:'Deleted data  successfully ',del_data:delData})
        }).catch((err)=>{
            res.send({error:'data not found',err:err})
        })

    }).catch((err)=>{
        res.send({message:'data already deleted'})
    })
    
}






module.exports={get_saraldata,post_saraldata,update_saraldata,deleteByid}
  