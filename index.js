const string = "hello!";

function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log("HELLO");
  }
function logWhisper(sting) {
    console.log("hello");
}
function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    if (string === string.toUpperCase()) {
        return  "YES INDEED!";
    }
    else (string === "I love you, Grandma."); {
        return "I love you, too.";
    }
}






/*function sayHello(name) {
    if(name.length > 10) {
       return "Wow ${name}, you have a very long name."
    } else {
       return "Hello, ${name}!"
    }
  }
  
    
   /* let string;
    switch (string) {
    case string === string.toUpperCase:
        sayHiToGrandma = "I can\'t hear you!";
        break;
    case string === string.toUpperCase:
        sayHiToGrandma = "YES INDEED!";
        break;
    case string === "I love you, too.":
        sayHiToGrandma = "I love you, Grandma.";
        break;
    default:
        sayHiToGrandma = "I love you, Grandma.";
}*/