class SheetController < ApplicationController
	def show
	@sheets = Sheet.all
	end
end
