class Contact < ActiveRecord::Base

  def self.valid_attrs(params)
    name = params[:name].to_s
    company = params[:company].to_s
    phone = params[:phone].to_s
    email = params[:email].to_s
    time = params[:time].to_s
    return if name.blank? || company.blank? || phone.blank? || email.blank?
    return {
      name: name,
      company: company,
      phone: phone,
      email: email,
      time: time,
    }
  end

  def self.create_from_params!(params)
    attrs = Contact.valid_attrs(params)
    return if attrs.blank?
    Contact.create(attrs)
  end
end
