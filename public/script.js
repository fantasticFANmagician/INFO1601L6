let obj2 = myobj;

//obj2 and myobj are the same variable

obj2.name = "Shelly";

console.log(myobj.name);//Shelly

//if you need to create a new object and copy its values use Object.assign

let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = 'Smith';

console.log(myobj.name, obj3.name);//Shelly, Smith

let record = {
   id: 1,
   name: "bob's"
   brewery_type: "fire",
   website_url:"https://bobs.com"
} 

//*note the use of backticks
//using string interpolation
//a row in the table would look like;

Let row = `<tr> 
    <td>${record.id}</td>
    <td>${record.name}</td>
    <td>${record.brewery_type}</td>
    <td>${recoard.website_url}</td>    
</tr>`;