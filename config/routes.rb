Rails.application.routes.draw do

  root to: 'home#index'
  match '/service' => 'home#index', via: :get
end
