//============= chapter 1-20 and Chapter 21-38 ======//
//============ Chapter 1 ==========//
//Assignment-1

//Q1
//alert("Hello World");

//Q2
//alert("Error! Please Enter a Valide Passward");

//Q3
//alert("Welcome to JS Land...\n Happy Coding!")

//Q4
//alert("\n \n Welcome to JS Land...")
//alert("\n Happy Coding...");

//Q5
//alert("Hello... I can run JS through my web browser's console");

//============== chapter 2 =========//
//Assignment 2

//Q1
//var username ="";

//Q2
//var myName = "Rohail Riaz Ahmed Siddiqui";
//document.write(myName);

//Q3
// a var messege;
// b messege = "Hello World";
// c alert(messege);


//Q4
//var students = "Jhone Doe";
//var age = "15 years old";
//var course ="Certified Mobile Application Development";
//alert(students);
//alert(age);
//alert(course);

//Q6
// var email = "rohail20siddiqui@gmail.com";
// alert("My email address is" + email);

//Q7
//Var book = "A smarter way to learn JavaScript";
//alert("I am trying to learn from the Book" + book);

//Q8
//document.write("Yah! I can write HTML content through JavaScript");

//Q9
//var a = '"========= &&!!0!!&&========="'
//alert(a);

//=========== CHAPTER 3 ==========//
//ASSIGNMENT 3
//Q1
//var age =15;
//alert("i am" +age + "years old")

//Q2
//var n = 14;
//alert("You have visited  this site" + n + "times");

//Q3
//var birthYear = 1994;
//console.log(typeof birthYear);
//document.write("My birth year is" +"" +birthYear + "<br>" + "Data type of my  decleared variable is" + typeof "birthYear");

//Q4
//var visitorName ="John";
//var productTittle = "5 T-shit(s)";
//var store = "XYZ Clothing store";
//document.write(visitorName +"odered"+ productTittle + "on"+ store);

//==============Chapter 4 ===============//
//Assignment 4

//Q1
//var [a,b,c]= ["Apple" , "Ball" ,  "Cat"];
//document.write([a,b,c]);

//Q2
//legal_variable
//var $abc;
//var start_abc;
//var yourValue;
//var name1;
//var _123_abc;

//Illigal_Variable
//var ?car;
//var %CSS;
//var 123_ef;
//var  ()b;
//var typeof;

//Q3
//document.write('<h1>"Rules for naming JS variables"</h1> <br> Variable names can only contains  numbers $ and For example <b>$my_1stVariable</b> <br>  Variable must begin with a Doller sign , underscore or any alphabate <br> For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keyword ' );


//=========Chapter 5 ===========//
//Asignment 5

//Q1
//Addition
//var num1 = 3;
//var num2 = 5;
//var sum = num1+num2;
//document.write(sum);

//Q2
//subtraction
//var num1 =3;
//var num2 =5;
//var sum = num1-num2;
//document.write(sum);

//Multipliation
//var num1 =3;
//var num2 =5;
//var sum = num1*num2;
//document.write(sum);

//Division
//var num1 =3;
//var num2 =5;
//var sum = num1/num2;
//document.write(sum);

//Modulus
//var num1 =3;
//var num2 =5;
//var sum = num1%num2;
//document.write(sum);

//Q3
//var yourNum ;
//document.write('Value  after variable declearation is:'+yourNum);
//yourNum = 5;
//document.write('<br>Initial value:'+yourNum)

//var val1 = ++yourNum;
//document.write('<br>Value after inrement is:'+val1)

//var val2 =7 ;
//var sum1 = val1+ val2;
//document.write('<br>Value after addition is:'+sum1)

//var sub = --sum1;
//document.write('<br>Value after decrement is:'+sub)

//var reminder = 12%sub;
//document.write(' <br>The reminder is:'+reminder)

//Q4
//var ticket_cost = 600;
//var buying = 5;
//var totalAmount = ticket_cost*buying;
//document.write('Total cost to by 5 tickest to a movie is :'+totalAmount+'PKR');


//Q5
//document.write('<h1>Table of 4</h1>');
//for(var i =1; i<=10; i++){
     // document.write('4' + 'x' + i + '=' + 4*i + '<br>');}


//Q7
//var priceOfitem1 = 650;
//document.write('Price of item 1 is:'+priceOfitem1)
//var quantityOfitem1 = 3;
//var total1= priceOfitem1*quantityOfitem1;
//document.write('<br> Quantity of item 1 is:'+quantityOfitem1)
//var priceOfitem2 = 100;
//document.write('<br>Price of item 1 is:'+priceOfitem2)
//var quantityOfitem2 = 7;
//var total2= priceOfitem2*quantityOfitem2;
//document.write('<br> Quantity of item 1 is:'+quantityOfitem2)
//var shipping = 100;
//document.write('<br> Shipping Charges:'+shipping)
//var subTotal = total1+total2+shipping;
//document.write(' <br>Total cost of your order is:'+subTotal)

//Q8
//var totalMarks = 980;
//document.write('Total marks:'+totalMarks)
//var obtainted = 804;
//document.write('<br>Obtained marks:'+obtainted)
//var percentage = 804*100/980;
//document.write('<br>Percentage:'+ percentage)

//Q9
//document.write('<h1>Currency in PKR</h1>')
//var us1 = 104.80;
//var $us = us1 * 10;
//var rayal = 28;
//var totalRayal = rayal * 25;
//var pkr =  $us + totalRayal;
//document.write('Total Currency in PKR:'+pkr)

//Q10
//var a =2;
//var b = a+5;
//var c = b* 10;
//var d =c/2;
//document.write(d);

//Q11
//document.write('<h1>Age Calculator</h1>')
//var currentYear=2016;
//document.write('Current year :'+currentYear)
//var birthYear=1992;
//document.write('<br>Birth year :'+birthYear)
//var Age = currentYear-birthYear;
//document.write('<br>Your Age is:'+Age)


//=====Chapter 6-9 ========//
//=====Assignment 6

//Q1
//document.write('Result');
//var a=10;
//document.write('<br>The value of a is '+a);
//document.write('<br>............................................');
//document.write('<br><br>The valu of ++a is:'+ ++a);
//document.write('<br>Now the value of a is:'+a);
//document.write('<br><br> Thne vale of a++ is:'+a++);
//document.write('<br>Now the value of a is:'+a);
//document.write('<br><br> Thne vale of --a is:'+ --a);
//document.write('<br>Now the value of a is:'+a);
//document.write('<br><br> Thne vale of a-- is:'+a--);
//document.write('<br>Now the value of a is:'+a);

//Q2
//var a = 2;
//document.write('a is:'+a);
//var b = 1;
//document.write('<br>b is:'+b);
//var result = --a - --b + ++b + b--;
           //  1 - ;
           //  0 - 0;
           //  0 - 0 + 1;
           //  0 - 0 + 1 + 1;
//document.write('<br>Result is:'+result)


//Q3
//var name = prompt('');
//document.write('Hello'+name)



//Q5
// var user = prompt('Enter the Number');
// for(var i=1; i<=10; i++){
      //document.write(user + 'x' + i + '='+ i*user +'<br>' )}


//Q7
//var sub1 = prompt('Enter Subject 1');
//var sub2 = prompt('Enter Subject 2');
//var sub2 = prompt('Enter Subject 3');
//var totalMarks =100;
//var obtainMarks1 = +prompt('Enter Subject 1 marks');
//var obtainMarks2 = +prompt('Enter Subject 2 marks');
//var obtainMarks3 = +prompt('Enter Subject 3 marks');
//document.write('Subject Total Obtained Marks Percentage');
//document.write('<br><br>'+ sub1 + totalMarks + obtainMarks1 + obtainMarks1*100/100+'%');
//document.write('<br><br>'+ sub2 + totalMarks + obtainMarks2 + obtainMarks2*100/100+'%');
//document.write('<br><br>'+ sub3 + totalMarks + obtainMarks3 + obtainMarks3*100/100+'%');
//var subTotal= 300;
//var obTotal = obtainMarks1 + obtainMarks2 + obtainMarks3;
//var persTotal = obTotal * 100 /subTotal;
//document.write( subTotal + obTotal + persTotal);


//========== Chapter 9-11 ===========//

//Q1
//var city = prompt('enter city name');
//if( city == 'karachi'){
     //document.write('Welcome to city of lights')}


 //Q2
 //var gender =prompt('enter your gender') 
 //if(gender == 'male' )  {
      //document.write('Good Morning Sir')}
      //else if( gender == 'female'){
      //document.write('Good Morning Maam') }  


//Q3
//var color = prompt('Enter color');
//if (color == 'red'){
     //document.write('Must Stop');}
      //else if( color == 'yellow'){
     //document.write('Ready to Move');}
    //else if( color == 'green'){
    // document.write('Move now');}

//Q5
//var a =4;
//if(++a === 5){
     //alert('given condition for variable a is true')}

//var  b =82;
//if(b++ === 83){
     //alert('Condition 2 is true');}

 //var c =12;
 //if(c++ == 13){
     // alert('condition 1 is true')}  
//if(c++ == 13){
     // alert('condition 2 is true')} 
//if(c++ < 14){
     // alert('condition 3 is true')}
//if(c++ === 14){
     // alert('condition 4 is true')}   


 //var  materialCost = 20000;
 //var laborCost = 2000;
 //var totalCost =materialCost+laborCost;
 //if(totalCost === laborCost +materialCost){
    //  alert('the cost equal')}   

    //if('true'){
    // alert('true');}
    // else if('false'){
    // alert('false');}

//Q6
//document.write('<h1>Mark Sheet</h1>');

//var subj1 = +prompt('enter sub 1');
//var subj2 = +prompt('enter sub 2');
//var subj3 = +prompt('enter sub 3');
//var toTalmark =300;
//document.write('Total marks:'+ toTalmark);
//var allSub = subj1 + subj2 + subj3;
//document.write('<br>Marks obtained:'+ allSub);
//var grd = allSub *100 / toTalmark;
//document.write('<br>Percentage:'+ grd + '%');

//if(grd == 90 ){
     //document.write('<br> Grade : A+1');}

 //Q7
// var user = prompt('Enter the Number');
 // secret = 8;
 //if(user == secret){
     // document.write('"Bingo! Correct answer"');}


//Q 8    
     //var divisible = prompt('enter number');
      //if (divisible%3 == 0){
          // document.write('Number divisible by 3')}
     // else{
           //document.write('Number not divisible by 3')
     // }

   //Q9
  // var check = prompt('Enter the Number');
  // if(check % 2 == 0){
       // document.write('Even Number')
  // }
  // else {
        //document.write('Odd Number')
   //}

   //10
   //var tem = prompt('Enter Temp')
   //if( tem >=  40  ){
        //document.write('"It is too hot outside"')
  // }
   //else if (tem >= 30){
    // document.write('"The weather today is Normal"')

  // }
   //else if (tem >= 20){
    // document.write('"Todays Weather is cool"')

  // }
  // else if (tem >= 10){
     //document.write('" OMG Todays Weather is cool"')

   //}

//   Q11
   //var num1 = +prompt('enter num 1');
   //var oprater = prompt('enter Operator');
//var num2 = +prompt('enter num 2');

//if (oprater ==='+'){
     //document.write(num1+num2)
//}
//else if (oprater ==='-'){
    // document.write(num1-num2)
//}
//else if (oprater ==='*'){
     //document.write(num1*num2)
//}
//else if (oprater ==='/'){
    // document.write(num1/num2)
//}
//else if (oprater ==='%'){
    // document.write(num1%num2)
//}

//======== Chapte 12-13=========//

//Q4
//var character = prompt('Enter Character');
//var vowel1='a';
//var vowel2 ='e';
//var vovel3 = 'i';
//var vowel4 ='o';
//var vowel5 = 'u';
//if (character == vowel1 ||vowel2 ||vowel3 || vowel4 || vowel5){
     //document.write('True');

//}
//else{
     //document.write('False');
//}

//Q5
//var pasword = 12345678;
//var js = +prompt('enter pasword')
//if (js === pasword){
     //document.write('Correct!the password you entered matches the orignal password')
     //}
     //else{
          //document.write('please enter your password')
     //}

//Q6
//var greeting;
//var hour =13;
//if(hour < 18){
  //   alert('Good day')
//}
//else{
   //  alert('Good evening')
//}

//Q7

//var time = prompt('enter time');
//if(time >= 0000 && time < 1200){
  //   document.write('Good Morning')
//}
//else if(time >= 1200 && time < 1700){
  //   document.write('Good afternoon')
//}
//else if(time >=1700 && time < 2200){
//     document.write('Good evening')
//}
//else( document.write('please enter valid time'));

//======= Chapter 13-15 ========//

//Q1
//var students =[];

//Q7
//document.write('Qualifications:'+'<br>')
//var arr =['SSC','HSC','BCS','BS','BCOM','MS','M.Phil.','PhD'];
//for(var i =0; i< arr.length; i++){
  //   document.write(i+')'+arr[i]+'<br>')
//}


//Q11
//var cities = ['Karachi','Lahore', 'Islamabad','Quetta', 'Peshawar'];
//document.write('Cities list:'+ '<br>' +cities +'<br>');
//cities.splice(0,3);
//document.write('Selected Cites list:'+'<br>'+ cities);

//Q12
//var arr3 =['This', 'is','my','cat'];
//document.write('Array:'+ '<br>' +arr3 + '<br>');
 //var arr4 = arr3.toString();
 //document.write('String:<br>'+[arr4]);
 //document.write('<br>Type of Array is:'+typeof(arr4));

 //Q13
 //document.write('Devices:<br>');
 //var device = ['kyboard','mouse', 'printer', 'monitor'];
 //document.write('out <br>'+device[0]+'<br>');
 //document.write('out <br>'+device[1]+'<br>');
 //document.write('out <br>'+device[2]+'<br>');
 //document.write('out <br>'+device[3]+'<br>');


 //============Chapter 17-20============//

 //Q3

//for(var i = 1; i<=10; i++){
  //   documents.write(i);
//}

//Q4
// var tab = prompt('Enter a Number to show its multiplication table');
// var lan = +prompt('Enter lenght multiplication table');
// for(var i =1; i>=lan; i++ ){

//      document.write(tab +'x'+ i +'='+tab*i + '<br>');
// }

//Q5
// var friuts = ['apple','banana','mango','orange','strawberry'];
// document.write(friuts+'<br>'+'<br>');
// document.write('Element at index is'+''+friuts[0]+'<br>');
// document.write('Element at index is'+''+friuts[1]+'<br>');
// document.write('Element at index is'+''+friuts[2]+'<br>');
// document.write('Element at index is'+''+friuts[3]+'<br>');
// document.write('Element at index is'+''+friuts[4]+'<br>');

//Q6
// for(var i =1; i<=15; i++){
//      document.write('Counting:'+i)
// }

// for(var i =10; i<=1; i--){
//      document.write('Counting:'+i)
// }

// for(var i =1; i<20; i++){
//    if (i % 2 == 0){
//         document.write(i+'<br>')
//    }
// }

// for(var i =1; i<20; i++){
//      if (i % 2 !== 0){
//           document.write(i+'<br>')
//      }
//   }

//=====Chap # 21 to 25======//
//Q1
//var first = 'Rohail';
//var last = 'Siddiqui';
//var fullname = first + last;
//document.write('Hello!'+ '' +fullname)

//Q2
//var fav = prompt('What is your favroite Mobile');
//var leg = fav.length;
//document.write('My favorite phone is :'+ fav + '<br>'+'Lengh of string :'+leg );

//Q3
//var country = 'Pakistani';
//var index = country.indexOf('n');
//document.write('String :'+country + '<br>' + 'Index of "n"'+ index);

//Q4
 //var l = 'Hello World'
 //var l1 = l.lastIndexOf('l');
 //document.write('String:'+ l + '<br>' + 'Last index of "l"'+l1)

 //Q5
 //var country = 'Pakistani';
//document.write('String:'+country+ '<br>'+'Character at index 3:'+country.charAt(3));

//Q7
// var text = 'Hyderabad';
// document.write('City:'+text+'<br>')
// var target = text.slice(5);
// var replace = 'Islam';
// document.write('After replacement:'+replace +target);


//Q8
// var message = 'Ali and sami are best friends. They play cricket and football together.';
// var msg =message.replace(/and/g,'&');
// document.write(msg);

//Q9
//var no = '472';
//document.write('Value:'+ no +'<br>' +'Type:'+typeof(no));
//parseInt('472');
//document.write('<br> Value:'+no +'<br>'+ 'Type:'+typeof(472));


//Q10
//var user = prompt('Enter Word');
//document.write('User input:'+user + '<br>')
//var convert = user.toUpperCase();
//document.write('Upper case:'+convert)



//Q11
// var user = prompt('enter a string word');
//document.write('User input:'+user)
// var upp  = user.slice(0,1);
// var low  = user.slice(1);
// upp = upp.toUpperCase();
// low = low.toLowerCase();
// var user = upp+low;
// document.write('Title case:'user);


//Q12
// var num = 35.36;
//document.write('Number:'+num)
// var num1 = num.toString();
// document.write('Result:'num1);


//Q13
//var userName = prompt('enter user name');
//if(userName == '@'|| '.' || ','|| '!' ){
     //alert('please enter a valid username')
//}



// Q14
// var user = prompt(' welcom to ABC bakery what do want to order sir/mam?');
// var array = ['cake', 'apple pie','cookie','chips','patties'];
// for (i=0; i<array.length; i++){
//      if(user[i]== 'cookie') {
//      console.log('cookie is avalaible at index 2 in our bakery')
//      
//      }  
//      else {
//           console.log('we are sorry. pastry not available in our bakery')
//      }
// } 

//========chap  # 26 to 30 ==========//
//Q1
// var num = 3.45214;
// document.write('Number:'+num +'<br>');
// document.write('Round:'+Math.round(num)+'<br>');
// var num = 3.45214;
// document.write('Floor:'+Math.floor(num)+'<br>');
// var num = 3.45214;
// document.write('Ceil:'+Math.ceil(num)+'<br>');

//Q2
// var num = -2.673;
// document.write('Number:'+num +'<br>');
// document.write('Round:'+Math.round(num)+'<br>');
// var num = -2.673;
// document.write('Floor:'+Math.floor(num)+'<br>');
// var num = -2.673;
// document.write('Ceil:'+Math.ceil(num)+'<br>');

//Q4
// var dice1 = Math.random()*4;
// var floor = Math.floor(dice1);
// document.write('random dice value: '+ floor+'<br>');
// var dice2 = Math.random()*6;
// var floor2 = Math.floor(dice2);
// document.write('random dice value: '+ floor2);

//Q5
// var head = Math.random();
// var head1 = Math.floor(head);
// document.write(head1 + '<br>' + 'random coin value: head <br>')
// var tail = Math.random();
// var tail1 = Math.floor(tail);
// document.write(tail1 + '<br>' + 'random coin value: tail <br>')

//Q6
// var random =Math.floor(Math.random()*100 + 1);
// document.write('random number b/w 1 to 100 : '+random);

//Q7
// var user = prompt('enter weight in kg');
// var user2 = parseInt(user);
// document.write('The weight of user is : '+ user2 +' kilograms');

//Q8
// var toss = +prompt('enter a number b/w 1 and 10')
// var random = Math.floor(Math.random()*10+1);
// if (toss === random){
//     document.write('congratulation')
// }else{
//     document.write('try again')
// }
// console.log(random);


//====== Chap # 31 to 34 =======//
//Q1
// var d = new Date();
// document.write(d +'<br>');
//Q2
// var m = d.getMonth();
// document.write(m);

//Q3
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  document.write('today is '+nameOfToday);
 
//Q4
// var d = new Date();
// var e = d.getDay;
// if (e === 0){
//      alert('its funday')
// }

//Q5
// samjh nahi a raha tha
// var d = new Date();
//  var dd = d.getDay();
// if(d < 16){
//      alert('first fifteen days of the month')

// }else('last days of the month')



//Q8
// var laterDate = new Date('December 31, 2020');
// alert('later date '+laterDate);

//Q9
// var ramzan = new Date('June 18, 2015');
// var passed = ramzan.getDay();
// var total = new Date().getDay();
// var accurat =total - passed;
// console.log(accurat);



//Q13
// var dob = new Date( prompt('enter dob , jan 01 1991'));
// var getmili = dob.getTime();
// var today = new Date();
// var mili  = today.getTime();
// var diff = mili - getmili;
// var age = Math.floor(diff/(1000*60*60*24*30*12))
// document.write('your age is : '+age)

//====== Chap # 35 to 38 ===========//

//Q1
// function tell(){
//      var time = new Date()
//     document.write(time);

// }
// tell();

//Q2
// var fname = prompt('enter first name');
// var lname = prompt('enter last name');
// function name(){
//      var fullname = fname+lname;
//      document.write('Hello'+''+ fullname);
// }
// name();

//Q3
// var num1 = +prompt('value 1');
// var oprator = prompt('oprator');
// var num2 = +prompt('value 2');
// function add(){
//     var fun = num1 +oprator+num2;
//     document.write(fun) 
// }
// add()

//Q4
// function cal(num1,oprat,num2){
//      if(oprat === '+'){
//           return num1+num2
//      }else if(oprat === '-'){
//           return num1-num2
//      }else if(oprat === '*'){
//           return num1*num2
//      }else if(oprat === '/'){
//           return num1/num2
//      }else if(oprat === ''){
//           return num1%num2
//      }else{
//           return 'incorrect oprator!'
//      }
// }
// var res = cal(2,'+',6)
// var res1 = cal(5,'-',4)
// var res2 = cal(5,'*',7)
// var res3 = cal(5,'&',7)
// console.log(res)
// console.log(res1)
// console.log(res2)
// console.log(res3)

//Q5 samjh nahi aya

//Q6
// function factorial(){
//      var n = prompt('enter num');
//      var i;
//      var f=1;
//      for (i= n; i >=1; i--){
//           f =f*i;
//           }
//           console.log('foctorial of '+ f)
    
// }
// factorial()

//Q9
// function calculate(width,height){
//      alert('Total area  of :'+ width*height);
// }
// calculate(60,6)

//=========Chap # 38 to 44 =====//
//Q2
// function leap(){
//      var year = prompt('ente year',1994);
//      if(year%4==0){
//           alert( year + 'Leap year')
//      }
//      else{
//           alert(year +'Not leap year')
//      }
// }
// leap()

//======Chap # 45 to 48 ======///
// function add (){
//      alert('Thanks for purchasing a phone from us')
// }
//is me kafi question samjh nahi aye.......
//=====chap # 59 to 52====///
//isme bhi smjh nahi aya logic clear nahi ho rahi meri.....



//======== Chap # 58 to 67 =====//
//i
// var element = document.getElementById("main-content")
//ii
// console.log(element.childNodes);
//iii
// var tag = document.getElementsByClassName('render')
//  tag.innerHTML ='render';
// var fname = document.getElementById("main-content")
//iv
// var val = document.getElementById("first-name");
// val.value="Alex";
//v
// var val = document.getElementById("last-name");
// val.value="Bank";
// var val = document.getElementById("email");
// val.value="alexbank@example.com";

//2
//i
// console.log(fname.nodeType)
//ii
// var lname = document.getElementById("lastName")
//iii
// lname.innerHTML="last name is Bank";
// console.log(lname.nodeType)
//iv
// var lastChild = document.getElementById("main-content");
// console.log(lastChild.firstChild);
// console.log(lastChild.lastChild);
//v
// var sibling1 = document.getElementById("lastName")
// console.log(sibling1.nextSibling)
// var sibling = document.getElementById("lastName")
// console.log(sibling.previousSibling)
//vi
// var p = document.getElementById("email");
// console.log(p.parentNode);












