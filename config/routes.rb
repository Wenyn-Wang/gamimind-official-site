Rails.application.routes.draw do

  root to: 'home#index'
  get "/*path" => "home#index"
end
