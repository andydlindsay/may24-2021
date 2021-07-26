class CharactersController < ApplicationController
  def index
    @location = Location.find params[:location_id]
    @characters = @location.characters

    # @characters = Character.all
  end
end
