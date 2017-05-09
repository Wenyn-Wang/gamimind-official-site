class AddImgAndBriefToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :brief, :string, after: :content
    add_column :posts, :img, :string, after: :brief
  end
end
