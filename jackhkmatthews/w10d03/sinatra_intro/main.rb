require "sinatra"
require "sinatra/reloader" if development?

# express route
# app.get('/hi', (req, res) => {
#
# })

get "/" do
  # @title = "Homepage"
  erb :home
end

get "/hi" do
  puts "hello puts"
  "hello World!"
end

get "/friends/:name/:last_name/:age" do
  "This friends name is #{params[:name]} #{params[:last_name]} and they are #{params[:age]} years old"
end
