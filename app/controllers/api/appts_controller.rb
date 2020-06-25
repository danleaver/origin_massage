class Api::ApptsController < ApplicationController

    def index
        render json: Appt.all
    end

    def show
        render json: Appt.find(params[:id])
    end

    def create
        @appt = Appt.new(appt_params)
        if @appt.save
            render json: @appt
        else
            render json: { errors: @appt.errors }, status: :unprocessable_entity
        end
    end

    def update
        @appt = Appt.find(params[:id])
        if @appt.update(appt_params)
            render json: @appt
        else
            render json: { errors: @appt.errors }, status: :unprocessable_entity
        end
    end

    def destroy 
        Appt.find(params[:id]).destroy
        render json: { message: 'appointment deleted'}
    end

    private
        def appt_params
            params.require(:appt).permit(:name, :length, :date, :time, :address, :phone)
        end
        
end
