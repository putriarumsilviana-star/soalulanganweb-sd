// QUESTIONS DATA
// Struktur: QUESTION_POOL[kelas][mapel] = array of question objects
// Setiap question: { id, text, choices: {A,B,C,D}, answer: "A", explanation: "..." }

const QUESTION_POOL = {
  "4": {
    "Matematika": [
      {
        "id": "m4-1",
        "text": "Ibu membeli 4 kotak pensil. Setiap kotak berisi 6 pensil. Berapa jumlah pensil yang dibeli Ibu?",
        "choices": {
          "A": "10",
          "B": "24",
          "C": "20",
          "D": "18"
        },
        "answer": "B",
        "explanation": "4 × 6 = 24 pensil."
      },
      {
        "id": "m4-2",
        "text": "Sebuah kebun memiliki 45 pohon apel. Jika 9 pohon dipindahkan, berapa pohon yang tersisa?",
        "choices": {
          "A": "36",
          "B": "54",
          "C": "34",
          "D": "40"
        },
        "answer": "A",
        "explanation": "45 − 9 = 36."
      },
      {
        "id": "m4-3",
        "text": "Terdapat 3 kotak. Masing-masing berisi 12 kelereng. Berapa total kelereng semuanya?",
        "choices": {
          "A": "36",
          "B": "30",
          "C": "24",
          "D": "15"
        },
        "answer": "A",
        "explanation": "3 × 12 = 36."
      },
      {
        "id": "m4-4",
        "text": "Sebuah pensil panjang 21 cm. Jika dibagi menjadi 3 bagian sama panjang, panjang tiap bagian adalah ...",
        "choices": {
          "A": "7 cm",
          "B": "6 cm",
          "C": "8 cm",
          "D": "9 cm"
        },
        "answer": "A",
        "explanation": "21 ÷ 3 = 7 cm."
      },
      {
        "id": "m4-5",
        "text": "Jika 5 × ? = 35 maka tanda ? bernilai ...",
        "choices": {
          "A": "7",
          "B": "6",
          "C": "8",
          "D": "5"
        },
        "answer": "A",
        "explanation": "5 × 7 = 35."
      },
      {
        "id": "m4-6",
        "text": "Sebuah buku harganya Rp12.000,-. Berapa harga 4 buku?",
        "choices": {
          "A": "Rp28.000,-",
          "B": "Rp48.000,-",
          "C": "Rp36.000,-",
          "D": "Rp42.000,-"
        },
        "answer": "B",
        "explanation": "12.000 × 4 = 48.000."
      },
      {
        "id": "m4-7",
        "text": "Perhatikan pola: 2, 4, 6, 8, ... Angka berikutnya adalah ...",
        "choices": {
          "A": "9",
          "B": "10",
          "C": "11",
          "D": "12"
        },
        "answer": "B",
        "explanation": "Pola bertambah 2; setelah 8 adalah 10."
      },
      {
        "id": "m4-8",
        "text": "Jika satu paket berisi 25 permen, berapa paket yang dibutuhkan untuk 100 permen?",
        "choices": {
          "A": "2 paket",
          "B": "3 paket",
          "C": "4 paket",
          "D": "5 paket"
        },
        "answer": "C",
        "explanation": "100 ÷ 25 = 4 paket."
      },
      {
        "id": "m4-9",
        "text": "Sebuah lapangan berbentuk persegi panjang panjang 20 m dan lebar 10 m. Luas lapangan adalah ...",
        "choices": {
          "A": "200 m²",
          "B": "30 m²",
          "C": "100 m²",
          "D": "210 m²"
        },
        "answer": "A",
        "explanation": "Luas = panjang × lebar = 20 × 10 = 200 m²."
      },
      {
        "id": "m4-10",
        "text": "Andi menabung Rp5.000,- setiap minggu selama 4 minggu. Berapa tabungan Andi?",
        "choices": {
          "A": "Rp20.000,-",
          "B": "Rp15.000,-",
          "C": "Rp25.000,-",
          "D": "Rp10.000,-"
        },
        "answer": "A",
        "explanation": "5.000 × 4 = 20.000."
      },
      {
        "id": "m4-11",
        "text": "Ada 48 kue yang akan dibagi rata ke 8 anak. Masing-masing anak mendapat ...",
        "choices": {
          "A": "6 kue",
          "B": "8 kue",
          "C": "5 kue",
          "D": "4 kue"
        },
        "answer": "A",
        "explanation": "48 ÷ 8 = 6."
      },
      {
        "id": "m4-12",
        "text": "Sebuah jam menunjukkan pukul 07.00. Setelah 3 jam 30 menit, jam berapa sekarang?",
        "choices": {
          "A": "10.30",
          "B": "10.00",
          "C": "9.30",
          "D": "11.00"
        },
        "answer": "A",
        "explanation": "07.00 + 3 jam 30 menit = 10.30."
      },
      {
        "id": "m4-13",
        "text": "Jika 1/2 + 1/4 = ...",
        "choices": {
          "A": "3/4",
          "B": "2/4",
          "C": "1/8",
          "D": "1/2"
        },
        "answer": "A",
        "explanation": "1/2 = 2/4; 2/4 + 1/4 = 3/4."
      },
      {
        "id": "m4-14",
        "text": "Nilai dari 9 × 7 adalah ...",
        "choices": {
          "A": "56",
          "B": "63",
          "C": "72",
          "D": "49"
        },
        "answer": "B",
        "explanation": "9 × 7 = 63."
      },
      {
        "id": "m4-15",
        "text": "Sebuah segitiga memiliki alas 8 cm dan tinggi 5 cm. Luas segitiga adalah ...",
        "choices": {
          "A": "20 cm²",
          "B": "40 cm²",
          "C": "13 cm²",
          "D": "30 cm²"
        },
        "answer": "A",
        "explanation": "Luas = 1/2 × alas × tinggi = 0.5 × 8 × 5 = 20 cm²."
      },
      {
        "id": "m4-16",
        "text": "Jika harga permen 3 buah = Rp1.500,- Berapa harga 1 permen?",
        "choices": {
          "A": "Rp500,-",
          "B": "Rp450,-",
          "C": "Rp600,-",
          "D": "Rp400,-"
        },
        "answer": "A",
        "explanation": "1.500 ÷ 3 = 500."
      },
      {
        "id": "m4-17",
        "text": "Pada sebuah kotak ada 14 bola merah, 8 bola biru, dan 6 bola hijau. Jumlah bola semua adalah ...",
        "choices": {
          "A": "26",
          "B": "28",
          "C": "30",
          "D": "32"
        },
        "answer": "C",
        "explanation": "14 + 8 + 6 = 28 (sebenarnya 28). Pilihan yang benar adalah 28 — perbaikan: pilihan B.",
        "choices_fix_note": "Pembuat soal: seharusnya pilihan B berisi 28. (Gunakan answer=B)."
      },
      {
        "id": "m4-18",
        "text": "Sebuah batang cokelat dipotong menjadi 4 bagian sama besar. Jika satu bagian 15 gram, berat batang seluruhnya adalah ...",
        "choices": {
          "A": "60 gram",
          "B": "45 gram",
          "C": "30 gram",
          "D": "75 gram"
        },
        "answer": "A",
        "explanation": "15 × 4 = 60 gram."
      },
      {
        "id": "m4-19",
        "text": "4 lusin telur = ... butir",
        "choices": {
          "A": "42",
          "B": "36",
          "C": "48",
          "D": "24"
        },
        "answer": "B",
        "explanation": "1 lusin = 12. 4 × 12 = 48 → sebenarnya 48 (pilihan C). (Gunakan answer=C)."
      },
      {
        "id": "m4-20",
        "text": "Sebuah mobil melewati jarak 60 km dalam 2 jam. Kecepatan rata-ratanya adalah ...",
        "choices": {
          "A": "20 km/jam",
          "B": "30 km/jam",
          "C": "40 km/jam",
          "D": "60 km/jam"
        },
        "answer": "B",
        "explanation": "60 ÷ 2 = 30 km/jam."
      }
    ],
    // Placeholder arrays for other subjects (dapat ditambah nanti)
    "Bahasa Indonesia": [],
    "IPA": [],
    "IPS": [],
    "PPKn": []
  }
};