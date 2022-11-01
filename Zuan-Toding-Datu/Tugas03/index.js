let person = [
    {
      name: "John",
      age: 35,
    },
    {
      name: "Bill",
      age: 23,
    },
    {
      name: "Bob",
      age: 17,
    },
    {
      name: "Jack",
      age: 20,
    },
  ];
  


let terbesar = person;
let terkecil = person;
for(let a=0;a<person.length;a++)
{
  if(terbesar > person[a])
  {
      terbesar = person[a]
      console.log("Paling Tua", terbesar)
  }

}
for(let a=2;a<person.length;a++)
{
  if(terkecil > person[a])
  {
      terkecil = person[a]
      console.log("Paling Muda", terkecil)
  }
}