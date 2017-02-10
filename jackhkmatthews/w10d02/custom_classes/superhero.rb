class Superhero

  attr_accessor "superpowers", :love_interest
  attr_reader :name_civi, :universe

  def initialize(name_civi, name_hero, universe)
    @name_civi = name_civi
    @name_hero = name_hero
    @universe = universe
  end

end

jack = Superhero.new("Oh Long Johnson", "KittyKat", "DC")
jack.superpowers = ["spidey sense", "teleportation", "wishes"]
jack.love_interest = ["Elaine Benes"]

p jack
puts jack.superpowers
