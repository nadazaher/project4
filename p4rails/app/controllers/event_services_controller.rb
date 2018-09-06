class EventServicesController < ApplicationController
    before_action :authenticate_user, only: [:create, :update, :destroy]
    
#    before_action :set_event_service,

    def index
        render json: { event_service: EventService.all }
    end

    def show
        id = params[:id]
        render json: { event_service: EventService.find(id)}
    end

    def create
        @event_service = EventService.create! event_service_params
        render json: { event_service: @event_service }
    end

    def update
        @event_service = EventService.find(params[:id])
        if @event_service.update! event_service_params
            render json: { event_service: @event_service }
        else
            render json: { message: 'Error'}
        end
    end

    def destroy
        id = params[:id]
        @event_service = EventService.find(id).destroy
        render json: { event_service: @event_service }
    end

    private

    def event_service_params
        params.require(:event_service)
            .permit(:type_of_service, :host,:contact_info, :description, :link, :avg_price, :user_id)
    end

end

