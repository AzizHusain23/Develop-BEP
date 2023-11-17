let tabel = {
    gajiPemilik: 0,
    gajiKaryawan: 0,
    jumlahKaryawan: 0,
    biayaPenyusutan: function () {
        return this.totalTetap() * ($("#persentase-penyusutan").value / 100);
    },
    totalTetap: function () {
        let container = 0;
        this.barangModalTetap.forEach(item => {
            container += item.total();
        });
        return container;
    },
    totalKerja: function () {
        let container = 0;
        this.barangModalKerja.forEach(item => {
            container += item.total();
        });
        return container;
    },
    biayaPenyusutanTahunan: function () {
        return Math.ceil(this.biayaPenyusutan() / 12)
    },
    biayaPenyusutanBulanan: function () {
        return Math.ceil(this.biayaPenyusutan() / 365)
    },

    totalgajiKaryawan: function () {
        return Math.ceil(this.gajiKaryawan() + this.jumlahKaryawan()) / 100 * 100;
    },
    totalFixedCost: function () {
        return (Math.ceil(this.biayaPenyusutanTahunan() / 100) * 100) + this.gajiPemilik() + this.totalgajiKaryawan();
    },
    biayaKeseluruhan: function () {
        return this.totalFixedCost() + this.totalKerja();
    },
}

const updateFixedcost = function () {
    $("#total-tetap").innerHTML = tabel.totalTetap();
    $("#penyusutan-sebulan").innerHTML = Math.ceil(tabel.biayaPenyusutanTahunan() / 100) * 100;
    tabel.gajiPemilik = $("#gaji-pemilik").value;
    tabel.gajiKaryawan = $("#gaji-karyawan").value;
    tabel.jumlahKaryawan = $("#jumlah-karyawan").value;
    $("#total-gaji-karyawan").innerHTML = tabel.totalgajiKaryawan();
    $("#total-fc").innerHTML = Math.ceil(tabel.totalFixedCost() / 100) * 100;
}