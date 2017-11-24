let express = require('express'),
    router  = express.Router(),
    mongoose = require('mongoose'),
    models  = require('./../models/schemas');

var Praktikan = models.Peserta;
var Dudi= models.Dudi;
var Guru = models.Guru;
var Jadwal = models.Jadwal;

    router.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", 'http://localhost:3456');
        res.header("Access-Control-Allow-Methods", 'GET, PUT, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With, content-type, application/json','X-Access-Token');
        next();
    });

    router.get('/me', function(req, res){
        res.json(req.decoded);
    });

    router.get('/cektoken', function(req, res){
        res.json(req.decoded);
    });

    router.get('/gurus', (req, res) => {
        Guru.find({}, (err, gurus) => {
            if (err) res.json(err)
            else res.json(gurus);
        })
    });
    router.get('/gurus', (req, res) => {
        let namaGuru = req.query.q;
        let regex  = new RegExp(namaGuru, "i");
        Guru.find({"nama": regex}, (err, gurus) => {
          if(err) res.json(err);
          else res.json(gurus);
        })
    });


    // Praktikans API
    router.post('/praktikan', function(req, res){
      var data = req.body;
      console.log(data);
      var p = req.body.nis;
      var pas = p.substr(1, p.length-1);
      var password = "p"+pas;
      var siswa = new Praktikan({
        _id: req.body.nis,
        nama: req.body.nama,
        password: password,
        periode: req.body.periode,
        progli: req.body.progli,
        hp: req.body.hp
      });
      siswa.save(function(err, saved){
        if(err) res.json(err);
        else res.json({'success': true, 'msg': 'Data ' + req.body.nama +' berhasil disimpan'});
      });

    });
    router.get('/praktikans', (req, res) => {
        Praktikan.find({}, function(err, praktikans){
            res.send(praktikans);
        });
        // res.json(Praktikan);
    });
    // router.get('/praktikan/:periode', function(req, res) {
    //     var periode = req.params.periode;
    //     Praktikan.find({periode: periode}, function(err, praktikans){
    //         res.json(praktikans);
    //     });
    // });
    router.get('/praktikan/detil/:q', function(req, res) {
        var q = req.params.q;
        var regex  = new RegExp(q, "i");
        Praktikan.find({$or: [{_id: regex}, {namaPeserta: regex}]}, function(err, praktikan){
            if(err) res.json(err);
            else if(praktikan.length < 1 ) res.json({"success": true, "data": "No Data"});
            else res.json(praktikan);
        });
    });

    router.get('/praktikan/:dudi', function(req, res){
        var dudi = req.params.dudi;
        // res.json({"dudi": dudi});
        Praktikan.find({_dudi: dudi}, function(err, praktikan){
            if(err) res.json(err);
            else res.json(praktikan);
        });
    });

    router.get('/praktikan/:nis', function(req, res){
    //   cosole.log(req.params.nis);
        var nis = req.params.nis;
        // console.log(nis);
        Praktikan.find({"_id": "u4396"}, function(err, praktikan){
            if(err) res.json(err);
            else res.json(praktikan);
        });
    });

    router.post('/updPraktikan/:nis', (req, res) => {
        var nis = req.params.nis;
        console.log(req.body);
        Praktikan.update({_id: nis}, {$set:{_guru: req.body._guru, _dudi: req.body._dudi}}, function(err, saved){
            if (err) res.json(err)
            // console.log(saved);
            else res.json({"success": true, msg: "Data Praktikan :" + nis + "berhasil ditempatkan di dudi :"+req.body._dudi });
        })
    })


    // DUDI API
    router.get('/dudis', (req, res) => {
        Dudi.find({}, function(err, dudis){
            res.send(dudis);
        });
    });
    router.get('/dudi/:g', (req, res) => {

        Dudi.find({_guru: req.params.g}, function(err, dudis){
            res.json(dudis);
            // console.log(dudis);
        });
    });
    router.get('/namaDudi/', (req, res) => {
      let namaDudi = req.query.q;
      let regex  = new RegExp(namaDudi, "i");
      Dudi.find({"namaDudi": regex}, function(err, dudi){
        if(err) res.json(err);
        else res.json(dudi);
      })
    });

    router.get('/kodeDudi/:kode', function(req, res){
        var kode = req.params.kode;
        var regex = new RegExp(kode, "i");
        Dudi.find({_id: regex}).sort({_id:-1}).limit(1)
            .exec(function(err, kodeDudi){
                if(err) res.json(err)
                else res.json(kodeDudi)
            });
    });

    router.post('/addDudi', (req, res) => {
        var dudi = new Dudi({
            _id: req.body._id,
            namaDudi: req.body.namaDudi,
            alamat: req.body.alamat,
            telp: req.body.telp,
            kota: req.body.kota
        });
        // console.log(req.body.kota);
        dudi.save(function(err, saved){
            if(err) res.json(err)
            else res.json({"success": true, "msg": "Dudi :" + dudi.namaDudi + " berhasil disimpan."});
        });
    });

    // Prakerlap API
    router.get('/prakerlap', (req, res) => {
        res.send('Prakerlap API');
    });

// Jadwal API
    router.post('/addJadwal', (req, res)=>{
        var jadwal = new Jadwal({
            _id : req.body.monKe,
            start: req.body.start,
            end: req.body.end,
            kegiatan: req.body.kegiatan,
            pelaksana: req.body.pelaksana,
            tempat: req.body.tempat
        });

        jadwal.save((err, saved)=>{
            if (err) res.json(err)
            res.json({'success': true, 'msg': 'Jadwal Berhasil ditambahkan'});
        })
    });
    router.get('/jadwals', function(req, res){
        Jadwal.find({}, function(err, jadwals){
            if (err) {res.json(err);}
            res.json(jadwals);
        });
    });

 
    module.exports = router;
