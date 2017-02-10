SELECTED_NUMBERS = []
LOWER_BOUND = 1
UPPER_BOUND = 10
HOW_MANY_NUMBERS = 5

def pick_selected_numbers
  HOW_MANY_NUMBERS.times do
    SELECTED_NUMBERS << rand(LOWER_BOUND..UPPER_BOUND)
  end
end

def is_number_present?(answer)
  SELECTED_NUMBERS.include? answer
end

pick_selected_numbers

puts "Chose a number between #{LOWER_BOUND} and #{UPPER_BOUND}:"
answer = gets.to_i
if is_number_present?(answer)
  puts "you're right"
else
  puts "you're wrong"
end
