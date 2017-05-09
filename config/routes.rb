Rails.application.routes.draw do

  root to: 'home#index'
  match '/service' => 'home#index', via: :get

  namespace :api do
    scope controller: "posts", path: "/posts", as: "posts" do
      post '/' => :index, as: "index"
      post '/show' => :show, as: "show"
    end
  end
end
