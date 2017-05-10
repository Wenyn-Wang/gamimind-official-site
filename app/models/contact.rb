class Contact < ActiveRecord::Base

  def self.valid_attrs(params)
    name = params[:name].to_s.strip
    company = params[:company].to_s.strip
    phone = params[:phone].to_s.strip
    email = params[:email].to_s.strip
    time = params[:time].to_s.strip
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
