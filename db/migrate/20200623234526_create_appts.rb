class CreateAppts < ActiveRecord::Migration[6.0]
  def change
    create_table :appts do |t|
      t.string :name
      t.integer :length
      t.date :date
      t.time :time
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end
