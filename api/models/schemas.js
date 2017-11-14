var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    
var userSchema = new Schema({
    _id: String,
    realname: String,
    password: String,
    email: String,
    hp: String,
    _role: {
        type: String,
        ref: 'Role'
    }
});

var pesertaSchema = new Schema({
    _id: String,
    password: String,
    periode: String,
    namaPeserta: String,
    progli: String,
    hp: String,
    _guru: {
        type: String,
        ref: 'Guru'
    },
    _dudi: {
        type: String,
        ref: 'Dudi'
    },
    _role: {
        type: Number,
        ref: 'Role'
    }
});

var guruSchema = new Schema({
    _id: String,
    password: String,
    nama: String,
    alamat: String,
    hp: String,
    _dudi: {
        type: String,
        ref: 'Dudi'
    },
    _role: {
        type: String,
        ref: 'Role'
    }
});

var dudiSchema = new Schema({
    _id: String,
    namaDudi: String,
    alamat: String,
    kontak: String,
    telp: String
});

var roleSchema = new Schema({
    _id: String,
    kode: String,
    role: String
});

var logSchema = new Schema({
    user: String,
    logStart: {
        type: Date
    }
})

var User = mongoose.model('User', userSchema, 'users'),
    Peserta = mongoose.model('Peserta', pesertaSchema, 'praktikans'),
    Guru = mongoose.model('Guru', guruSchema, 'gurus'),
    Dudi = mongoose.model('Dudi', dudiSchema, 'dudis'),
    Role = mongoose.model('Role', roleSchema, 'roles'),
    Log = mongoose.model('Log', logSchema, 'logs');

module.exports = {
    User: User,
    Guru: Guru,
    Peserta: Peserta,
    Dudi: Dudi,
    Role: Role,
    Log: Log
}