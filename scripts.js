
function toCamelCase(str, delimiter) {
     if (!str) {
      return '';
    }
    const words = str.split(delimiter);
    const capitalizedWords = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    const camelCase = capitalizedWords.join('');
    return camelCase;
  }

  
  function onSubmit() {
    const input = document.getElementById('input').value;
    const delimiter = document.getElementById('delimiter').value;
    const output = toCamelCase(input, delimiter);

    document.getElementById('output').textContent = output;
  }




function parseInput() {
    var inputString = document.getElementById("ParservalueText").value;
    let output = [];
    let value = 0;
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        if (char === 'p') {
            value += 1;
        } else if (char === 'm') {
            value -= 1;
        } else if (char === 's') {
            value *= value;
        } else if (char === 'o') {
            output.push(value);
        } else {
            continue;
        }
    }
    document.getElementById("Parser").innerHTML = output;
}





function findExtraChars() {
    var str = document.getElementById("findvalueText").value;
    let count = 0;
    const legalChars = /^[a-n]+$/i;
    for (let i = 0; i < str.length; i++) {
        if (!legalChars.test(str[i])) {
            count++;
        }
    }
    document.getElementById("printText3").innerHTML = count;
}