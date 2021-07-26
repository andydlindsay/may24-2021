class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :klass
      t.string :race
      t.string :alignment
      t.references :city, foreign_key: true, index: true 

      t.timestamps
    end
  end
end
