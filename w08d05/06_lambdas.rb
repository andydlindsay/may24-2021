pet_names = ['Amber', 'Kimchi', 'Mika', 'Prairie', 'Coco']
another_array = [1, 2, 3]

my_lambda = lambda do |pet_name|
  puts "hello there #{pet_name}"
end

# block is defined from do to end
pet_names.each &my_lambda
another_array.each &my_lambda
