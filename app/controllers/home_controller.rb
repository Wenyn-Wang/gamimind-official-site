class HomeController < ApplicationController
  layout "home"

  def index
    render react_component: "Home"
  end
end
