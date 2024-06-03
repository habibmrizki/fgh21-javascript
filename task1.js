const biodata = {
  name: "Habib Muhammad Rizki",
  age: 22,
  hobbies: ["Membaca buku", "Olahraga"],
  isMaried: false,
  schooList: [
    {
      nameSchool: "SMA N 1 Cilacap",
      yearIn: 2017,
      yearOut: 2020,
      major: "IPS",
    },
    {
      nameSchool: "SMA N 3 Cilacap",
      yearIn: 2018,
      yearOut: 2021,
      major: "IPA",
    },
  ],
  skills: [
    {
      skillName: "Javascript",
      level: "Beginner",
    },
    {
      skillName: "CSS",
      level: "Advanced",
    },
    {
      skillName: "HTML",
      level: "Expert",
    },
  ],
  interestInCoding: true,
};

console.log(biodata);
console.log("Name : " + biodata.name);
console.log("Age : " + biodata.age);
console.log("Hobbies : " + biodata.hobbies);
console.log("Is Married : " + biodata.isMaried);
console.log("Name School :  " + biodata.schooList[0].nameSchool);
console.log("Year In : " + biodata.schooList[0].yearIn);
console.log("Year Out : " + biodata.schooList[0].yearOut);
console.log("Major : " + biodata.schooList[0].major);
console.log("Nama School : " + biodata.schooList[1].nameSchool);
console.log("Year In : " + biodata.schooList[1].yearIn);
console.log("Year Out : " + biodata.schooList[1].yearOut);
console.log("Major : " + biodata.schooList[1].major);
console.log("Skill Name : " + biodata.skills[0].skillName);
console.log("Level : " + biodata.skills[0].level);
console.log("Skill Name : " + biodata.skills[1].skillName);
console.log("Level : " + biodata.skills[1].level);
console.log("Skill Name : " + biodata.skills[2].skillName);
console.log("Level : " + biodata.skills[2].level);
console.log("Interest In Coding : " + biodata.interestInCoding);
