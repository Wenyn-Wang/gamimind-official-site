class Post < ActiveRecord::Base
  enum status: {trash: 0, published: 1, unpublished: 2, draft: 3, pending: 4}
end
