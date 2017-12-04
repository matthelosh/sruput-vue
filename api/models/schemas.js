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
    nama: String,
    progli: String,
    hp: String,
    _guru: {
        type: String,
        ref: 'Guru'
    },
    _dudi: {
        type: String,
        ref: 'Dudi',
        default: '0'
    },
    _role: {
        type: Number,
        ref: 'Role',
        default: 3
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
        ref: 'Dudi',
        default: '0'
    },
    _role: {
        type: String,
        ref: 'Role',
        default: 1
    }
});

var dudiSchema = new Schema({
    _id: String,
    namaDudi: String,
    alamat: String,
    kota: String,
    telp: String,
    _guru: {
        type: String,
        ref: 'Guru'
    }
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
});

var jadwalSchema= new Schema({
    _id: String,
    start: String,
    end: String,
    kegiatan: String,
    pelaksana: String,
    tempat: String
});
var monitoringSchema = new Schema({
    _id: String,
    _guru: { type: String, ref: 'Guru'},
    tglCetak: String,
    masalah: String,
    solving: String
});
var nilaiSchema = new Schema({
    progli: String,
    idSiswa: {
        type: String,
        ref: 'Peserta'
    },
    skor: Array,
    na: Number,
    predikat: String
});
var jurnalSchema = new Schema({
    _id: String,
    nis: {
        type: String,
        ref: 'Peserta',
    },
    tgl: String,
    kegiatan: String,
    lokasi: String,
    catatan: String,
    ket: String
})

var User = mongoose.model('User', userSchema, 'users'),
    Peserta = mongoose.model('Peserta', pesertaSchema, 'praktikans'),
    Guru = mongoose.model('Guru', guruSchema, 'gurus'),
    Dudi = mongoose.model('Dudi', dudiSchema, 'dudis'),
    Role = mongoose.model('Role', roleSchema, 'roles'),
    Log = mongoose.model('Log', logSchema, 'logs'),
    Monitoring = mongoose.model('Monitoring', monitoringSchema),
    Jadwal = mongoose.model('Jadwal', jadwalSchema, 'jadwals'),
    Nilai = mongoose.model('Nilai', nilaiSchema, 'nilais'),
    Jurnal = mongoose.model('Jurnal', jurnalSchema, 'jurnals');

module.exports = {
    User: User,
    Guru: Guru,
    Peserta: Peserta,
    Dudi: Dudi,
    Role: Role,
    Log: Log,
    Monitoring: Monitoring,
    Jadwal: Jadwal,
    Nilai: Nilai,
    Jurnal: Jurnal
};
