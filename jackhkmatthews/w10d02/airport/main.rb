require_relative "airport"
require_relative "flight"
require_relative "passenger"

@airport   = Airport.new('London Heathrow')
passenger1 = Passenger.new("Jack")
flight1    = Flight.new(100, "Stockholm")
flight1.add_passenger(passenger1)
@airport.add_flight(flight1)

passenger2 = Passenger.new("Ed")
flight2  = Flight.new(200, "Aldgate")
flight2.add_passenger(passenger2)
@airport.add_flight(flight2)

def list_flights(airport)
  airport.flights.each_with_index do |flight, index|
    puts "\t#{index}. #{flight}"
  end
end

def list_passengers(flight)
  flight.passengers.each_with_index do |passenger, index|
    puts "\t#{index}. #{passenger.name}"
  end
end

def menu
  puts `clear`
  puts "****** Welcome to #{@airport.name} ******"
  puts "*What operation do you want to perform?*"
  puts "\t1. Add a flight"
  puts "\t2. List flights"
  puts "\t3. Add passenger to flight"
  puts "\t4. List passengers of a flight"
  puts "\tQ. Quit"
  puts "\n. Enter now: "
  gets.chomp
end

response = menu

while response.upcase != "Q"
  case response
  when "1"
    puts "How many seats are on this flight?"
    number_of_seats = gets.to_i

    puts "What is the flight's destination?"
    destination = gets.chomp

    flight = Flight.new(number_of_seats, destination)
    puts @airport.add_flight(flight)[-1]
  when "2"
    puts "All flights:"
    list_flights @airport
  when "3"
    puts "What is the passenger's name?"
    name = gets.chomp
    passenger = Passenger.new(name)

    puts "What flight would you like to add the passenger to?"
    list_flights @airport
    flight_index = gets.to_i
    flight = @airport.flights[flight_index]

    flight.add_passenger passenger

    puts "#{passenger.name} was added to the #{flight.destination} flight"
  when "4"
    puts "Please select a flight"
    list_flights @airport
    flight_index = gets.to_i

    flight = @airport.flights[flight_index]

    puts "Passengers:"
    list_passengers flight
  else
    #something went wrong
  end
  gets
  response = menu
end
