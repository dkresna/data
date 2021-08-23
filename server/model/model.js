const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    NomorBPS : {
        type : String,
        required: true,
        unique: true
    },
    NamaWajibPajak : {
        type: String,
        required: true,
        unique: true
    },
    NPWP : {
        type: String,
        required: true,
        unique: true
    },
    JenisPermohonan : {
        type: String,
        required: true,
        unique: true
    },
    StatusPermohonan : {
        type: String,
        required: true,
        unique: true

    }
})

const Bpsdb = mongoose.model('bpsdb', schema);

module.exports = Bpsdb;