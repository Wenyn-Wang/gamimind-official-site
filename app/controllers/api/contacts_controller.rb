module Api
  class ContactsController < ApplicationController
    def create
      contact = Contact.create_from_params!(params)
      return error if contact.blank?
      ok
    end
  end
end
