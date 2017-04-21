class HomeController < ApplicationController
  def index
    @props = {clients: ["MIA", "LC", "ROLAND", "WN"]}
  end
end
