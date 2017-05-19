class Post < ActiveRecord::Base
  mount_uploader :img, PostImgUploader
  enum status: {trash: 0, published: 1, unpublished: 2, draft: 3, pending: 4}

  def as_json
    tmp = super(except: [:created_at, :updated_at])
    tmp.merge({
      img: self.img.try(:url),
      thumbnail: self.img.thumbnail.try(:url),
      date: self.created_at.strftime("%Y/%m/%d"),
    })
  end
end
