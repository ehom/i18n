var FakeText = {
  spaceChar: "\u0020",
  leftDoubleAngleChar: "\u00ab",
  rightDoubleAngleChar: "\u00bb",
  
  charMap: {
    'A': "\u24b6",
    'E': "\u24ba",
    'I': "\u24be",
    'O': "\u00d6",
    'U': "\u24ca",
    'a': "\u1e01",
    'e': "\u00eb",
    'i': "\u00ef",
    'o': "\u00f6",
    'u': "\u00fc",
    '1': "\u2460",
    '2': "\u2461",
    '3': "\u2462",
    '4': "\u2463",
    '5': "\u2464",
    '6': "\u2465",
    '7': "\u2466",
    '8': "\u2467",
    '9': "\u2468"
  },
  create: function(strText) {
    var arrChars = strText.split('');
    
    return {
      accent: function() {
        arrChars = arrChars.map(function(item) {
          if (FakeText.charMap[item]) {
            item = FakeText.charMap[item];
          }
          return item;
        });
        
        return this;
      },
      expand: function() {
        // expand by 30%
        // pad beginning and end of text

        var nChars = arrChars.length * 0.3;
        var expansion =
          FakeText.spaceChar + '*'.repeat(nChars * 0.5) + FakeText.spaceChar;
        
        arrChars.unshift(expansion);
        arrChars.push(expansion);
        
        return this;
      },
      bracket: function() {
        arrChars.unshift(FakeText.leftDoubleAngleChar);
        arrChars.push(FakeText.rightDoubleAngleChar);
        
        return this;
      },
      text: function() {
        return arrChars.join('');
      }
    };
  }
};
