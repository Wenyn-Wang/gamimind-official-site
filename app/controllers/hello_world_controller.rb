class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "DAMA" }
  end
end
