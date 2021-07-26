class CreateRings < ActiveRecord::Migration[6.1]
  def change
    create_table :rings do |t|

      t.timestamps
    end
  end
end
