function calc() {
  var input = $('#input').val();
  var data = input.split('\n');
  
  money = 0
  money_taka = 0
  money_taka_list = []
  money_miho = 0
  money_miho_list = []
  
  for(i in data) {
    var l = data[i];

    switch( true ) {
    case /\d\d\/\d\d\(\S\)/.test(l):
      money = 0;
      break;
    case /-[\d,]+/.test(l):
      money = Number(l.match(/-[\d,]+/)[0].replace(/,/, ''));
      break;
    case /^たかひろ$/.test(l):
      money_taka += money;
      money_taka_list.push(String(money));
      break;
    case /^みほ$/.test(l):
      money_miho += money;
      money_miho_list.push(String(money));
      break;
    }    
  }

  $('#output').val("たかひろ: " + money_taka + "\n" + "みほ: " + money_miho + "\n" + "たかひろ詳細:" + money_taka_list + "\nみほ詳細:" + money_miho_list);
}
