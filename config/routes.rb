Rails.application.routes.draw do

  root to: 'home#index'
  match '*unmatched_route', to: 'home#index', via: :get
end
