# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
    Appt.create ( {name: Faker::Name.name_with_middle, 
    length: rand(90), 
    date: Faker::Date.forward(days: 23),
    time: Faker::Time.forward(days: 23, period: :evening),
    address: Faker::Address.street_address,
    phone: Faker::PhoneNumber.cell_phone
        
        
        })

    puts "data has been seeded!"
end