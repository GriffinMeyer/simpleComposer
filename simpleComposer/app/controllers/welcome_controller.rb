class WelcomeController < ApplicationController

  def index
  	@new = Sheet.find(1).name
  	@test = "Hey there"
  end

  def new
  	@test = "lol"
  end
end
