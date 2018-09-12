class EventServicesController < ApplicationController
    # before_action :authenticate_user, only: [:create, :update, :destroy]
    
#    before_action :set_event_service,

    def index
    if (params[:type_of_service])
        @event_services = EventService.where(type_of_service: params[type_of_service])
    elsif (params[:user_id])
        @event_services = User.find(params[:user_id]).event_services
      else
        @event_services = EventService.all
      end
      render json: { event_services: @event_services}
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
        @event_service = EventService.find(params[:id])
        if @event_service.destroy
            render json: {message: ("service with id: " + (params[:id]) + " deleted")}
        else
        render json: { message: "Error"}
        end
    end

    private

    def event_service_params
        params.require(:event_service)
            .permit(:type_of_service, :host, :number, :email, :description, :link, :avg_price, :user_id, :id, :image)
    end

end

