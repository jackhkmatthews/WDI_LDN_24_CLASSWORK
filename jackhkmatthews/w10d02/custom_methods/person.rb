class Person
  def talk words
    "I say #{words}"
  end
  def self.shout
    "HELLO"
  end
end

a = Person.new

puts a.talk('hi')
# puts Person.talk('hi')

# puts a.shoud
puts Person.shout
