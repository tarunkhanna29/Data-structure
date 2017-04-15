function enums(start,end,callback) {
   callback(start);
   if (end == 1)
      return 1;
   else{
      return enums(start + 1, end - 1, callback);
   }
}

enums(1,10,function (number){
  console.log(number);
});

setTimeout(function(){ console.log("End"); }, 0);