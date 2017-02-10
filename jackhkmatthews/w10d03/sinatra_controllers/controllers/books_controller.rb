# RESTful routes (Book)

# INDEX - Gets all the books we have
# GET "/books"
get "/books" do
  # some code here
  erb :"books/index"
end

# NEW - Give us a form to fill out details of a new book
# GET "/books/new"
get "/books/new" do
  # some code here
  erb :"books/new"
end

# CREATE - Create a new book, add it to our list
# POST "/books"
post "/books" do
  # some code here
end

# SHOW - Just get one specific book (that already exists)
# GET "/books/3"
get "/books/:id" do
  # some code here
  erb :"books/show"
end

# EDIT - Give us a form to edit a book's details
# GET "/books/3/edit"
get "/books/:id/edit" do
  # some code here
  erb :"books/edit"
end

# UPDATE - Updates a specific book
# PUT "/books/3"
put "/books/:id" do
  # some code here
end

# DESTROY - Deletes a specific book
# DELETE "/books/3"
delete "/books/:id" do
  # some code here
end
