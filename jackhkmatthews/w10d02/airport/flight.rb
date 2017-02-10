class Flight

  attr_reader :number_of_seats
  attr_accessor :destination, :passengers

  def initialize(number_of_seats, destination)
    @number_of_seats = number_of_seats
    @destination = destination
    @passengers = []
  end

  def add_passenger(passenger)
    @passengers << passenger
  end

  # only triggers when flight outputed as a string
  def to_s
    "Flight to #{@destination} with #{@number_of_seats} seats"
  end

end
