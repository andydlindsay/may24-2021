class CharactersController < ApplicationController
  def index
    @city = City.find params[:city_id]
    @characters = @city.characters
  end
end
