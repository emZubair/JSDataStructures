
var Stack = function() {
    // Uses string as a stroage media
    this.storage = "";
  }
  
  Stack.prototype.push = function(value) {
    let space = " "
    if (this.storage.length === 0) {
      console.log(`Adding First entry:${value}, length is 0`)
      space = ""
    }
    this.storage += space + value;
  }
  
  Stack.prototype.pop = function(){
    var lastIndex = this.storage.lastIndexOf(" ");
    this.storage = this.storage.substring(0, lastIndex);
  }
  
  Stack.prototype.size = function() {
    return this.storage.split(" ").length
  }
  
  Stack.prototype.print = function() {
    console.log(this.storage);
  }
  
  var ws = new Stack();
  console.clear()
  ws.push("Monday")
  ws.print();
  ws.push("Tuesday")
  console.log(ws.size())
  ws.print();
  ws.pop()
  ws.print()
  ws.push("Tuesday")
  ws.push("Tuesday")