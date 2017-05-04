Rails.application.routes.draw do

  root to: 'home#index'
  match '/service' => 'service#index', via: :get
end
