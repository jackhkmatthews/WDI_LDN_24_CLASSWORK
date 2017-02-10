class Person

  # attr_reader :name, :age
  # attr_writer :age

  attr_reader "not_name"
  attr_accessor "age"

  def initialize(name)
    puts "initialize has been run"
    @not_name = name
  end

  # def set_name(name)
  #   puts "Setting a persons name"
  #   @name = name
  # end

  # def name
  #   puts "Returning a person's name"
  #   @name
  # end

  # def age=age
  #   @age = age
  # end

  # def age
  #   @age
  # end

end

bob = Person.new("Bob")
# bob.set_name("Bob")
puts "This person's name is #{bob.not_name}"
bob.age = 29
puts "Bob is #{bob.age}"
p bob

# obj.method(arguements) &block
#
# var obj = {}
#
# obj.name = "alex"
#
# obj.name
