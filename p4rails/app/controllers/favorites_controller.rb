class FavoritesController < ApplicationController

    def index
        render json: { favorite: Favorite.all }
    end

    def show
        id = params[:id]
        render json: { favorite: Favorite.find(id)}
    end

    def create
        @favorite = Favorite.create! favorite_params
        render json: { favorite: @favorite }
    end

    def update
        @favorite = Favorite.find(params[:id])
        if @favorite.update! favorite_params
            render json: { favorite: @favorite }
        else
            render json: { message: 'Error'}
        end
    end

    def destroy
        id = params[:id]
        @favorite = Favorite.find(id).destroy
        render json: { favorite: @favorite }
    end

    private

    def favorite_params
        params.require(:favorite)
            .permit(:event_service_id, 
            :user_id)
    end

end



