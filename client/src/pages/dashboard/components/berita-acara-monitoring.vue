<template>
<div>
    <div class="row hidden-print fixed" v-bind:class="{float: over}">
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
            <p>:  {{namaDudi}}</p>
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
import {mapState, mapGetters} from 'vuex'
import axios from 'axios'
export default {
    data: function(){
        return {

            //    kaprog: {},
                dudi: '',
                siswas: [],
                tahap:'',

        }
    },
    created(){
        this.getSiswas();
        if(window.scroll >= 50){
            over = true;
        } else {
            over = false;
        }
    },

    methods:{
        cetak(){
            window.print();
        },
        getSiswas(){
            var kodeDudi = localStorage.getItem("dudi"),
            token = localStorage.getItem("token"),
            self = this;
            axios.get('/protected/praktikan/'+kodeDudi, {headers: {'X-Access-Token': token}})
				.then(siswas => { self.siswas = siswas.data});
        }
    },
    computed:{
       guru(){
           return localStorage.getItem("realname");
       },
       namaDudi(){
           return localStorage.getItem("namaDudi");
       },
       total(){
           return this.siswas.length;
       },
       progli(){
           return this.siswas[0].progli.toUpperCase();
       },
       tanggal(){
           var d = Date.now();
           var tgl = new Date(d);
           var tanggal = tgl.toDateString();
           return tanggal;
       },
       monKe(){
           if (( Date.now() >= new Date("2017-08-7") && Date.now() <= new Date("2017-08-09"))) {
                return "I (SATU)";
            } else if(( Date.now() >= new Date("2017-09-18") && Date.now() <= new Date("2017-10-01"))){
                return "II (DUA)";
            } else if(( Date.now() >= new Date("2017-10-16") && Date.now() <= new Date("2017-10-30"))){
                return "III (TIGA)";
            }else if(( Date.now() >= new Date("2017-11-13") && Date.now() <= new Date("2017-11-26"))){
                return "IV (EMPAT)";
            }else{
                alert("Masa Monitoring sudah habis");
                return "Masa Monitoring Sudah Habis. Silahkan konsultasi kepada Ketua Prakerlap";
                return false;
            };
       },
       kaprog(){
           if(this.siswas[0].progli == "tkj" || this.siswas[0].progli == "mm") {
               return "Nanang Wahyudianto, S.Kom";


           } else {
               return "Sayit Anwar, S,Pd";

           }
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
