class RingsController < ApplicationController
  before_action :set_ring, only: %i[ show edit update destroy ]

  # GET /rings or /rings.json
  def index
    @rings = Ring.all
  end

  # GET /rings/1 or /rings/1.json
  def show
  end

  # GET /rings/new
  def new
    @ring = Ring.new
  end

  # GET /rings/1/edit
  def edit
  end

  # POST /rings or /rings.json
  def create
    @ring = Ring.new(ring_params)

    respond_to do |format|
      if @ring.save
        format.html { redirect_to @ring, notice: "Ring was successfully created." }
        format.json { render :show, status: :created, location: @ring }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ring.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rings/1 or /rings/1.json
  def update
    respond_to do |format|
      if @ring.update(ring_params)
        format.html { redirect_to @ring, notice: "Ring was successfully updated." }
        format.json { render :show, status: :ok, location: @ring }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ring.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rings/1 or /rings/1.json
  def destroy
    @ring.destroy
    respond_to do |format|
      format.html { redirect_to rings_url, notice: "Ring was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ring
      @ring = Ring.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ring_params
      params.fetch(:ring, {})
    end
end
