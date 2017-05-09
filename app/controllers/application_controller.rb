class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def ok(data = {})
    render json: data, status: 200
  end

  def error(msg = "")
    render json: {error: msg}, status: 500
  end
end
