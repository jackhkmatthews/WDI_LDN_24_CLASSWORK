def reverse(string)
  array = []
  string.each_char { |char| array.unshift(char)}
  array.join
end

puts reverse("Jack")

def isPalindrome?(string)
  reverse(string).downcase == string.downcase
end

puts isPalindrome?("Jack")
puts isPalindrome?("kayak")
