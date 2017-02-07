# 5x + 4y = 10
# y = 2
# x = 0.4

# puts "If 5x + 4y = 10"
# puts "and y = 2"
# puts "what does x equal?"
#
# answer = gets.to_f
#
# while answer != 0.4
#   puts "try again"
#   answer = gets.to_f
# end
#
# puts "corectoooo"
# 
# puts "What is pi to 10 decimal places?"
#
# answer = gets.to_f
# pi = 3.1415926535
#
# while answer != pi
#   if answer > pi
#     puts "toooooo high mofo"
#     answer = gets.to_f
#   elsif answer < pi
#     puts "hahaha lol way too low"
#     answer = gets.to_f
#   end
#   next unless answer == pi
#   puts "fook me you're a clever one.....lol you're still an idiot"
# end

puts `clear`

lives = 5
while true
  if lives == 0
    puts `clear`
    puts "Game Over... You ran out of lives. Would you like to try again? (yes/no)"
    restart = gets.chomp

    if restart == "yes"
      puts `clear`
      lives = 5
    else
      puts "Better luck next time"
      exit
    end
  end

  puts "What is 10 + 10"
  puts "You have #{lives} lives remaining"
  answer = gets.to_i

  if answer != 20
    lives-=1
    puts "Incorrect Answer"
  else
    puts "Well Done! Correct answer."
    exit
  end
end
