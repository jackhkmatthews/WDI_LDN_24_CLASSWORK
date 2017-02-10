class Airport

  attr_reader :name
  attr_accessor :flights

  def initialize name
    @name = name
    @flights = []
  end

  # def name
  #   @name
  # end

  def add_flight flight
    @flights << flight
    # versus "flights" think about what accessor flights method does
    # and then what "flights" would return
  end

end
