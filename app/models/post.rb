class Post < ActiveRecord::Base
  belongs_to :author, foreign_key: :author_id, class_name: "User"
  enum status: {trash: 0, published: 1, unpublished: 2, draft: 3, pending: 4}
end
