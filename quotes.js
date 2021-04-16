 // TASK 1:  AN api GET request to URL

var array = [];
var i = 0;

var interv = setInterval(function () {
  fetch("https://api.kanye.rest/").then(res => res.json())
    .then(data => array.push(data))   //TASK 3 :Storing the response of each api call to an array
  
 // TASK 2:  GET request to the above api for five seconds
    i++;                    

  if (i > 5) {
    clearInterval(interv);
    console.log(array);

    /* TASK4:- FINDING LONGEST QUOTE */
    var longest = array.reduce(function (a, b) { return (a.quote.length) > (b.quote.length) ? a : b; }).quote.length;
    for (let i = 0; i < array.length; i++) {
      if (longest === array[i].quote.length) { console.log("Longest Quote :- ", array[i].quote); }
    }
    console.log("\n");

    /* TASK5 :- FINDING LONGEST WORD AMONGST ALL THE QUOTE */
    //console.log(array[0].quote[0].length);
    var lon_len = 0;
    var lon_word = array[0].quote[0];
    for (let i = 0, lon_len = 0; i < array.length; i++) {


      var s_arr = [];
      s_arr = array[i].quote.split(" ");
      //console.log(s_arr);  /* For testing each splited string in array*/ 
      var isBoring = false;
      if (array[i].quote.length > 20) {
        array[i].isBoring = true;
      }
      else { array[i].isBoring = false; }
      for (let j = 0; j < s_arr.length /*array[i].quote.length*/; j++) {
        if (lon_len < s_arr[j].length) {
          lon_len = s_arr[j].length;
          lon_word = s_arr[j];
        }
      }
    }
    console.log("Longest word amongst all quotes is :- ", lon_word);

    console.log("\n");
    //TASK 6 
    console.log("After adding isBoring Property to Each quote which is greater then length 20");

    console.log("\n");

    console.log(array);

  }
}, 1000);