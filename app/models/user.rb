class User < ActiveRecord::Base
  rolify
  has_many :posts, foreign_key: :author_id
end
