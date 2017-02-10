require "pg"

db = PG.connect(dbname: 'facebook', host: 'localhost')

puts db

begin
  db.exec("select * from people") do |result|
    result.each do |row|
      puts "#{row['first']} #{row['last']}"
    end
  end

  puts "\n Add a person to the db..."
  puts "What is their first name?"
  first = gets.chomp
  puts "What is thier last name"
  last = gets.chomp
  puts "What is their relationship status?"
  relationship = gets.chomp

  sql = "insert into people (first, last, relationship) values ('#{first}', '#{last}', '#{relationship}')"

  db.exec(sql)
ensure
  db.close
end
