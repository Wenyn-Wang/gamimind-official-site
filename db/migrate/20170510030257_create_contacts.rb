class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :company
      t.string :phone
      t.string :email
      t.string :time
      t.timestamps
    end
  end
end
