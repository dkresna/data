const { Router } = require('express');
var Bpsdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const bps = Bpsdb({
        NomorBPS : req.body.nomor,
        NamaWajibPajak : req.body.namaWP,
        NPWP: req.body.npwp,
        JenisPermohonan: req.body.jenis,
        StatusPermohonan : req.body.status
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Bpsdb.findById(id)
            .then(data =>{
                res.redirect('/Cari-BPS');
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Bpsdb.find()
            .then(bps => {
                res.send(bps)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }}

exports.get = (req, res)=>{ {
        db.collection('bpsdbs').find({"NomorBPS": { $regex: req.query.inputCountry ,$options: 'i' }}).toArray( (err, results) => {
            console.log('got search')
            res.send(results)});
        };

    }