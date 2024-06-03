const mtk = 90;
const bahasaIndonesia = 82;
const bahasaInggris = 85;
const ipa = 78;
const totalNilai = mtk + bahasaIndonesia + bahasaIndonesia + ipa;
const rataRata = totalNilai / 4;

let grade;
if (rataRata >= 90 && rataRata <= 100) {
  grade = "A";
} else if (rataRata >= 80) {
  grade = "B";
} else if (rataRata >= 70) {
  grade = "C";
} else if (rataRata >= 60) {
  grade = "D";
} else {
  grade = "E";
}

console.log("Rata-rata : " + rataRata);
console.log("grade : " + grade);
