# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data..."

puts "Creating cities..."
10.times do
  City.create(
    city: Faker::Games::DnD.city
  )
end

puts "Grab the cities..."
cities = City.all

puts "Creating characters..."
100.times do
  Character.create(
    klass: Faker::Games::DnD.klass,
    race: Faker::Games::DnD.race,
    alignment: Faker::Games::DnD.alignment,
    city: cities.sample
  )
end

puts "All done!! :)"
