Rails.application.routes.draw do

  root to: 'home#index'
  match '/blog' => 'home#index', via: :get
  match '/post/:slug' => 'home#index', via: :get
  match '/service/social-media' => 'home#index', via: :get
  match '/service/owned-media' => 'home#index', via: :get
  match '/service/customer-relationship' => 'home#index', via: :get

  namespace :api do
    scope controller: "posts", path: "/posts", as: "posts" do
      post '/' => :index, as: "index"
      post '/show' => :show, as: "show"
    end

    scope controller: "contacts", path: "/contacts", as: "contacts" do
      post '/create' => :create, as: "create"
    end
  end

end
