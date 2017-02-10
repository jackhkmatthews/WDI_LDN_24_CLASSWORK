array = (1..105).to_a
@array_new = []


array.each do |number|

  string = ""
  if number % 3 == 0
    string << "pling"
  end
  if number % 5 == 0
    string << "plang"
  end
  if number % 7 == 0
    string << "plong"
  end
  if string == ""
    string << number.to_s
  end
  @array_new << string
end

puts @array_new
