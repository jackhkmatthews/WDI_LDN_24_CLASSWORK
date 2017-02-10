require "sinatra"
require "sinatra/reloader" if development?

get "/" do
  @title = "Home"
  erb :home
end

get "/sports" do
  @title = "Sports"
  erb :sports
end

get "/weather" do
  @title = "Weather"
  erb :weather
end

get "/politics" do
  @title = "Politics"
  erb :politics
end

get "/science" do
  @title = "Science"
  erb :science
end

post "/navigate" do
  # case params[:destination].downcase
  #   when "sports" then redirect to("sports")
  #   when "weather" then redirect to("weather")
  #   when "science" then redirect to("science")
  #   when "politics" then redirect to("sports")
  #   else
  #     @error = "invalid page selected"
  #     puts "invalid page selected"
  #     erb :home
  # end
  redirect params[:destination].downcase
end

get "/*" do
  @error = "invalid page selected"
  puts "invalid page selected"
  erb :home
end
