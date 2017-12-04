<template>
<div>
    <div class="row hidden-print fixed" v-bind:class="{'float': 'over'}">
        <button class="btn btn-warning center-block flat" @click="cetak"><i class="fa fa-print"></i> Cetak</button>
        <br>
    </div>
    <div class="printMonitor container">
    <div class="row headRow">
        <div class="col-sm-1 logo text-center" >
            <img src="./../../../../dist/assets/img/jatim.jpg" alt="Logo Jatim" class="img headLogo block-center" height="" width="80px" style="margin: auto">
        </div>
        <div class="col-sm-10 headContent text-center">
            <h5>PEMERINTAH PROVINSI JAWA TIMUR</h5>
            <h5>DINAS PENDIDIKAN</h5>
            <h5><strong>SEKOLAH MENENGAH KEJURUAN NEGERI 10 MALANG</strong></h5>
            <P>Jl. Raya Tlogowaru Telp. (0341) 754086 Fax. (0341) 754087</P>
            <p>http://smkn10-mlg.sch.id    E-mail: smkn10_malang@yahoo.co.id</p>
            <div class="col-sm-6">MALANG</div>
            <div class="col-sm-6">Kode Pos 65133</div>
        </div>
    </div>
    <div class="row metaRow ">
        <h3 class="text-center">BERITA ACARA MONITORING PRAKERLAP ANGKATAN X TAHAP I</h3>
        <div class="col-sm-3">
            <p class="meta-label">NAMA GURU PRAKERLAP</p>
            <p class="meta-label">NAMA PERUSAHAAN (DU/DI)</p>
            <p class="meta-label">JUMLAH PRAKTIKAN</p>
        </div>
        <div class="col-sm-3">
            <p>: {{guru}}</p>
            <p>:  {{dudi.namaDudi}}</p>
            <p>:  {{total}} </p>
        </div>
        <div class="col-sm-3">
            <p class="meta-label">KOMPETENSI KEAHLIAN</p>
            <p class="meta-label">HARI/TANGGAL MONITORING</p>
            <p class="meta-label">MONITORING KE</p>
        </div>
        <div class="col-sm-3">
            <p>:  {{progli}} </p>
            <p>:  {{tanggal}} </p>
            <p>:  {{monKe}} </p>
        </div>
    </div>

    <div class="row contentRow">
        <div class="table-responsive">
            <table class="table table-bordered table-monitoring">
                <thead>
                    <tr>
                        <th rowspan="2">No</th>
                        <th rowspan="2">Nama Praktikan</th>
                        <th colspan="3">Kehadiran</th>
                        <th rowspan="2">Permasalahan</th>
                        <th rowspan="2">Penyelesaian Permasalahan</th>
                    </tr>
                    <tr>
                        <th>S</th>
                        <th>I</th>
                        <th>A</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(siswa, index) in siswas">
                        <td style="text-align:center">{{index+1}}</td>
                        <td>{{siswa.nama}}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <!-- <tr>
                        <td rowspan="3">$index+1</td>
                        <td rowspan="3">data.namaPeserta</td>
                        <td rowspan="3"></td>
                        <td rowspan="3"></td>
                        <td rowspan="3"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>

                        <td></td>
                        <td></td>
                    </tr>
                    <tr>

                        <td></td>
                        <td></td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
    <div class="row sign">
        <div class="col-sm-3 text-center">
            <p>KETUA PRAKERLAP</p>
            <br>
            <br>
            <br>
            <p><strong><u>LUKI EMILIYA HIDAYAT, M.Pd</u></strong></p>
            <p>NIP. 19790219 200903 2 003</p>
        </div>
        <div class="col-sm-3 text-center">
            <p>KAPROGLI</p>
            <br>
            <br>
            <br>
            <p><strong><u>{{kaprog}}</u></strong></p>
            <p>NIP. </p>
        </div>
        <div class="col-sm-3 text-center">
            <p>PIMPINAN DU/DI</p>
            <br>
            <br>
            <br>
            <p><strong><u>..................................</u></strong></p>
        </div>
        <div class="col-sm-3 text-center">
            <p>GURU PEMBIMBING</p>
            <br>
            <br>
            <br>
            <p><strong><u>..................................</u></strong></p>
        </div>

    </div>


</div>
</div>

</template>

<script>
import store from './../../../store/index.js'
// import {mapState, mapGetters} from 'vuex'
import moment from 'moment'
import axios from 'axios'
export default {
    data: function(){
        return {
                over: false,
            //    kaprog:    {},
                dudi: '',
                siswas: [],
                tahap:'',
                token: localStorage.getItem("token"),
                jadwals: ''

        }
    },
    created(){
        this.getSiswas();
        this.getDudi();
        this.kodeMon();
        if(window.scroll >= 50) this.over = true;
        this.over = false;
        
    },

    methods:{
        kodeMon(){
            var self = this,
                token = self.token,
                d   = new Date(),
                tgl = moment(d).format('DMMYYYYHms');
            console.log(tgl);

        },
        cetak(){
            window.print();
        },
        getDudi(){
            var kodeDudi = localStorage.getItem("dudi"),
                self = this,
                token = self.token;
            axios.get('/protected/namaDudi/'+kodeDudi, {headers: {'X-Access-Token': token}})
                .then(res=>{
                    self.dudi = res.data;
                });
        },
        getSiswas(){
            var kodeDudi = localStorage.getItem("dudi"),
                self = this,
                token = self.token;
            axios.get('/protected/praktikan/'+kodeDudi, {headers: {'X-Access-Token': token}})
				.then(siswas => { 
                    self.siswas = siswas.data
                    console.log(siswas);
                });
        },
    },
    computed:{
       guru(){
           return localStorage.getItem("realname");
       },
       namaDudi(){
           var self= this;
           var token = self.token;
           var kode = localStorage.getItem("dudi");
           axios.get('/protected/namaDudi/kode', {headers: {'X-Access-Token': token}})
                .then(res=>{
                    return res.data.namaDudi;
                });
       },
       total(){
           return this.siswas.length;
       },
       progli(){
        //    return this.siswas[0].progli.toUpperCase();
       },
       monKe(){
            var self = this;
            var token = self.token;
            var now = Date.now();
            if(now < new Date("2018-01-29")) return "Belum Waktunya Monitoring";
            if(now >= new Date("2018-01-29") && now <= new Date("2018-02-10")) return "I (SATU)";
            if(now >= new Date("2018-03-05") && now <= new Date("2018-03-17")) return "II(DUA)";
            if(now >= new Date("2018-04-09") && now <= new Date("2018-04-21")) return "III (TIGA)";
            if(now >= new Date("2018-0514") && now <= new Date("2018-05-26")) return "IV (EMPAT)";
            else return "Monitoring Periode ini sudah berakhir. Waktunya Penjemputan";
       },
       tanggal(){
            var tgl = new Date();
            var haris = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat','Sabtu'],
                bulans = ['Jan', 'Peb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nop', 'Des'];
                var day = tgl.getDay();
                var hari = haris[day];
                var tanggal = tgl.getDate();
                var m = tgl.getMonth();
                var bln = bulans[m];
                var th = tgl.getFullYear();
            return hari+', '+tanggal+'  '+bln+' '+th;
       },
       kaprog(){
        //    if(this.siswas[0].progli == "tkj" || this.siswas[0].progli == "mm") {
        //        return "Nanang Wahyudianto, S.Kom";


        //    } else {
        //        return "Sayit Anwar, S,Pd";

        //    }
       }
    }

}
</script>
<style scoped>
.printMonitor{
    padding: 20px;
}
.headRow{
    border-bottom: 3px double black;
}

.headContent h5,
.headContent p{
    margin: 3px;
    width: 100%;

}
.logo{
    margin-left: 25px;
    position: relative;
}
.table > thead > tr > th{
    vertical-align: middle!important;
    text-align: center;
}
.fixed{
    position: fixed;
    top: 20px;
    left: 20px;
}
.flat{
    border-radius: 0!important;
}
.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
    border-color: #333!important;
}
@media print{
    .printMonitor{
        width: 100%;
        background: pink;
    }
    .logo{
        width: 150px;
        height: auto;
        position: absolute;
    }
    .headContent{
        width: 100%;
        background: pink;
    }
}
</style>
