class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :author_id
      t.string :slug
      t.string :title
      t.text :content
      t.string :brief, default: ""
      t.string :img
      t.integer :status
      t.timestamps
    end
  end
end
