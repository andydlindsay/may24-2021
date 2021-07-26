class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :poem
      t.string :race

      t.references :location, foreign_key: true, index: true

      t.timestamps
    end
  end
end
