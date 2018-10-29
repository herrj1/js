
<textarea id="mytextarea">
1,2,3,4
4,5,6,7
6,4,3,2
</textarea>




var lines = $('#mytextarea').val().split(/\n/);
var texts = []

for (var i=0; i < lines.length; i++) {
  // only push this line if it contains a non whitespace character.
  // row += lines[i][j] + "  ";  
  if (/\S/.test(lines[parseInt(i)])) {
    texts.push($.trim("["+lines[i]+"]"));
  }

}

alert(JSON.stringify(texts));