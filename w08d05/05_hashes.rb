# JS key/value pairs, Ruby hash

user = {
  "first_name" => "John",
  "last_name" => "Stamos"
}

puts user['first_name']

# symbols: light-weight strings

user = {
  :first_name => 'John',
  :last_name => 'Stamos'
}

p user['last_name'.to_sym()]

user = {
  first_name: 'John',
  last_name: 'Stamos'
}

p user
