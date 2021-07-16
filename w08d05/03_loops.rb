i = 0
# loop do
#   i += 1
#   puts "hello there #{i}"

#   # if i >= 10
#   #   break
#   # end

#   break if i >= 10
# end

# while i < 10 do
#   puts "hello from the while #{i}"

#   i += 1
# end

# until i >= 10 do
#   puts "hello there"
#   i += 1
# end

pet_names = ['Amber', 'Kimchi', 'Mika', 'Prairie', 'Coco']

pet_names.each_with_index do |pet_name, index|
  puts "hello there #{pet_name}, #{index}"
end

# # for..of == for..in

# for pet_name in pet_names do
#   puts "hello there #{pet_name}"
# end

# num = 5

# num.times do
#   puts "hello"
# end
