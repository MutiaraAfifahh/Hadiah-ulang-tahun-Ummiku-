# Hadiah Ulang Tahun untuk Ummi 💙❤️

Website ucapan ulang tahun dari **Mutiara Afifah** untuk Ummi. Dibuat dengan HTML, CSS, JavaScript, dan audio WAV lokal tanpa API atau layanan berbayar.

## Isi folder

- `index.html` — halaman utama, surat, galeri, doa, dan pemutar musik.
- `style.css` — tema biru-merah, layout responsif, serta animasi.
- `script.js` — kontrol audio, amplop surat, doa, galeri/lightbox, hati dan confetti.
- `audio/lagu-ulang-tahun-ummi.wav` — musik instrumental orisinal sekitar 60 detik, dibuat secara programatis (piano sintetis dan lonceng lembut), tanpa vokal.
- `foto/` — tempat menaruh foto asli Ummi dan keluarga.

> **Penting tentang foto:** foto yang disebut pernah diunggah sebelumnya tidak tersedia di ruang kerja saat proyek ini dibuat. Karena itu, tidak ada foto buatan AI atau foto stok yang disisipkan. Website menampilkan placeholder yang memberi tahu nama file yang perlu ditambahkan. Salin foto asli milik keluarga ke folder `foto/` dengan nama yang tercantum di bawah.

## Menambahkan foto asli

Foto-foto yang kamu kirim sudah disalin ke folder `foto/`. Jika ingin mengganti atau menambah foto, gunakan nama persis berikut (huruf besar/kecil berpengaruh saat di GitHub Pages):

1. `ummi.jpg` — foto utama Ummi.
2. `kenangan-1.jpg` — foto kenangan keluarga pertama.
3. `kenangan-2.jpg` — foto kenangan keluarga kedua.
4. `kenangan-3.jpg` — foto kenangan keluarga ketiga.

JPG paling mudah. Jika foto Anda PNG atau WebP, ubah ekstensi pada nama file di `index.html` agar cocok dengan file sebenarnya. Jangan memakai alamat lokal seperti `C:\Users\...`; gunakan jalur relatif seperti `foto/ummi.jpg`. Foto tetap berupa file asli; situs hanya menampilkan dan membingkainya.

## Membuka di Visual Studio Code

1. Unduh ZIP proyek lalu ekstrak ke folder yang mudah ditemukan.
2. Buka Visual Studio Code.
3. Pilih **File → Open Folder…**, lalu pilih folder `ultah-ummi` hasil ekstraksi.
4. Pada panel Extensions, cari **Live Server** (misalnya ekstensi Live Server oleh Ritwick Dey) lalu instal jika belum ada.
5. Buka `index.html`, klik kanan, lalu pilih **Open with Live Server**.
6. Browser akan membuka website melalui alamat lokal Live Server. Jika foto/audio baru ditambahkan, simpan file lalu muat ulang halaman.

## Menguji musik dan foto

- Klik **Putar Musik untuk Ummi 🎶** (tombol play pada pemutar). Browser tidak diminta memutar audio otomatis.
- Dengarkan musik dan periksa progress bar, durasi, pause/play, dan volume.
- File audio harus berada di `audio/lagu-ulang-tahun-ummi.wav`. File WAV ini sudah disertakan di ZIP.
- Pastikan ikon play berubah menjadi pause saat audio berjalan dan durasi muncul. Jika tidak, periksa Console/Network browser dan pastikan file audio tidak dipindahkan.
- Periksa bahwa keempat foto muncul. Jika placeholder tetap terlihat, cek ejaan nama, ekstensi, dan folder `foto/`.
- Coba tombol **Buka Surat untuk Ummi**, **Buka Doa Spesial**, klik foto, dan tutup lightbox dengan tombol × atau Escape.
- Sebelum publikasi, lakukan tes melalui Live Server; jangan hanya membuka file HTML dengan klik ganda.

## Publikasi ke GitHub Pages

1. Masuk ke GitHub dan buat repository baru bernama **`ultah-ummi`**.
2. Unggah isi folder proyek ke root repository. Pastikan `index.html`, `style.css`, `script.js`, folder `foto/`, dan folder `audio/` ikut terunggah. Jangan hanya mengunggah file ZIP.
3. Buka **Settings → Pages** di repository.
4. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch **`main`** dan folder **`/(root)`**, lalu tekan **Save**.
6. Tunggu proses deployment selesai. URL biasanya berbentuk `https://USERNAME.github.io/ultah-ummi/` (ganti `USERNAME` dengan nama akun GitHub Anda).
7. Buka URL itu dan tes audio, surat, doa, galeri, dan foto dari ponsel serta laptop.

Semua sumber daya situs menggunakan jalur relatif. Jangan mengubah jalur menjadi alamat file lokal komputer. Jika nama repository berbeda, URL publiknya juga berbeda.

## Catatan audio

Audio WAV disertakan sebagai file sungguhan dan dipakai oleh elemen HTML `<audio>`. Musik dibuat secara programatis dengan gelombang sintetis bernuansa piano dan lonceng, bukan rekaman piano akustik. Tidak memerlukan internet untuk memutar file audio setelah website dimuat. Font dekoratif memakai Google Fonts bila koneksi internet tersedia; jika tidak, font fallback tetap digunakan.
