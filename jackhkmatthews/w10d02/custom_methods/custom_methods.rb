# ------------
# def say_hello
  # return 1 + 1
  # 10 * 4
  # puts "hello"
  # "something"
  # [1, 2, 3].map{ |n| n + 5}
  # "hello"
# end
#
# puts say_hello

# ------------
# def say_hello name
#   "Mr. #{name}"
# end
#
# puts "what is your name"
# name = gets.chomp
# puts "Welcome #{say_hello name}"

# ------------
# def say_hello name
#   "Mr. #{name}"
# end
#
# puts "what is your name"
# puts "Welcome #{say_hello gets.chomp}"

# ------------
# def say_hello name="Jack"
#   "Welcome #{name}"
# end
#
# puts say_hello

# ------------
# def say_hello name="Jack", name2
#   ["Welcome #{name}",
#   "Welcome #{name2}"]
# end
#
# puts say_hello "alex", "rane"

# ------------
# def say_hello *names
#   p names
# end
#
# say_hello "alex", "rane", "jack"

# ------------
# def say_hello a, b, *c, d
#   puts "here are the arguements"
#   puts a, b, c, d
# end
#
# say_hello "alex", "rane", "jack", "jos", "jamie", "davinder", "steph"

# ------------
# def say_hello a, b, *c, d
#   puts "here are the arguements"
#   puts a, b, c, d
# end
#
# say_hello "alex", "rane", "jack", "jos", "jamie", "davinder", "steph"

# ------------
# def test
#   puts "I'm here in the method... Lets see how many studetns we can break"
#   yield
#   puts "Now I'm here..."
#   yield
# end
#
# test { puts "I'm now in the block... Where am I?"}

# ------------
# def custom_map(array)
#   output = []
#   array.each { |e| output << yield(e) }
#   output
# end
#
# puts custom_map [1, 2, 3] { |n| n + 10 }
# puts custom_map [1, 2, 3] { |n| n + 20 }
# puts custom_map [1, 2, 3] { |n| n + 30 }

# ------------
def test
  hello = "I'm here in the method... Lets see how many studetns we can break"
  yield(hello)
end

test { |hello| puts hello}
