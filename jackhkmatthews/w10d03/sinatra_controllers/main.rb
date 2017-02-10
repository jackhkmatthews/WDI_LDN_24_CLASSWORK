require "sinatra"
require "sinatra/reloader" if development?

# require_relative "./controllers/books_controller"
# require_relative "./controllers/statics_controller"

Dir[File.dirname(__FILE__) + '/controllers/*rb'].each { |file| require file}
