require "sinatra"
require "sinatra/reloader" if development?

compliments = [
  "You’re actually smart",
  "You’re attractive for a _____ person",
  "You’re not fat/old"
]



get "/" do
  @title = "Home"
  @compliment = compliments[rand(compliments.length)]
  erb :home
end

get "/*" do
  @error = "route not recognised"
  puts = "route not recognised"
  erb :home
end
