function calc() {
  var input = $('#input').val();
  var data = input.split('\n');
  
  money = 0
  money_taka = 0
  money_miho = 0
  
  for(i in data) {
    var l = data[i];

    switch( true ) {
    case /\d\d\/\d\d\(\S\)/.test(l):
      money = 0;
      break;
    case /-[\d,]+/.test(l):
      money = Number(l.match(/-[\d,]+/)[0].replace(/,/, ''));
      break;
    case /たかひろ/.test(l):
      money_taka += money;
      break;
    case /みほ/.test(l):
      money_miho += money;
      break;
    }    
  }

  $('#output').val("たかひろ: " + money_taka + "\n" + "みほ: " + money_miho);
}
