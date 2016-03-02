class WelcomeController < ApplicationController
require 'securerandom'
  def index
  	@new = Sheet.all
  	if params[:sheetid] == nil
  		sheetId = SecureRandom.urlsafe_base64(16)
  		Sheet.create(:name => "", :tempo => "", :notes => "", :timesiga => "", :timesigb => "", :sheet_id => sheetId)
  		redirect_to controller: 'welcome', sheetid: sheetId
  	else	
  	@sheetId = params[:sheetid]
  	@updated = Sheet.find_by sheet_id: @sheetId
  	end
  end

  def push
  	sheetId = params[:sheetid]
  	name = params[:name]
  	tempo = params[:tempo]
  	notes = params[:notes]
  	timesiga = params[:timesiga]
  	timesigb = params[:timesigb]
  	respond_to do |format|
  		format.json {render :json => "Success"}
  	end
  	sheet = Sheet.find_by sheet_id: sheetId
  	sheet.update(name: name)
  	sheet.update(tempo: tempo)
  	sheet.update(notes: notes)
  	sheet.update(timesiga: timesiga)
  	sheet.update(timesigb: timesigb)


  end

  def pull
  	@sheetid = params[:sheetid]
  	@updated = Sheet.find_by sheet_id: @sheetid
  	respond_to do |format|
  		format.json { render json: @updated}
  	end
  end

  def new
  	@sheetid = params[:sheetid]
  	@updated = Sheet.find_by sheet_id: @sheetid
  	respond_to do |format|
  		format.html {render html: @updated}
  		format.js { render xml: @test}
  		format.json { render json: @updated}
  	end	
  end
end
