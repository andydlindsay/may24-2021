first_name = 'John'

if first_name == 'Jane'
  puts 'good name'
elsif (first_name == 'John')
  puts('hello there mr. stamos')
else
  puts('choose a better name')
end

# if (first_name != 'Jane')
#   puts('hello there not Jane')
# end

# unless (first_name == 'Jane')
#   puts('hello there not Jane from the unless')
# end

# if (!loggedIn) console.log('not logged in')
# if (err) throw err;

puts("hello there John") if (first_name == 'John')
puts "you are not Jane" unless (first_name == 'Jane')

# puts first_name == 'John' ? 'hello there' : 'goodbye'
