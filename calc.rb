# coding: utf-8
calc_flg = false

REGEX_DATE = /\t\t\d\d\/\d\d\(\S\)/
REGEX_MONEY = /-\d+/
REGEX_MIHO = /みほ/
REGEX_TAKAHIRO = /たかひろ/

money_taka = 0
money_miho = 0
money = 0

File.open("./data.txt") do |f|
  f.each do |l|
    case l
    when REGEX_DATE
      date = l
        money = 0
    when REGEX_MONEY
      money = l.gsub(',', '').to_i
    when REGEX_TAKAHIRO
      money_taka += money
    when REGEX_MIHO
      money_miho += money
    end
  end
end

puts "たかひろ：#{money_taka}"
puts "みほ：#{money_miho}"
