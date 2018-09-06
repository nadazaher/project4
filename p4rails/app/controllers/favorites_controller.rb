class FavoritesController < ApplicationController

    def index
        if (params[:event_service_id])
          @favorites = EventService.find(params[:event_service_id]).favorites
        elsif 
            (params[:user_id])
          @favorites = User.find(params[:user_id]).favorites
        else
          @favorites = Favorite.all
        end
        render json: { favorites: @favorites}
      end

    def show
        @favorite = Favorite.find(params[:id])
        render json: {favorite: @favorite}
    end

    def create
        if (params[:event_service_id])
            @favorite = EventService.find(params[:event_service_id]).favorites.new(favorite_params)

        elsif (params[:user_id])
          @favorite = User.find(params[:user_id]).favorites.new(favorite_params)
       
        else
          @favorite = Favorite.new(favorite_params)
        end

        if @favorite.save
          render json: { favorite: @favorite }
        else
          render json: { message: 'Some fields are invalid', errors: @favorite.errors }, status: :bad_request
        end
      end

      def update
        @favorite = Favorite.find(params[:id])
        if @favorite.update(favorite_params)
          render json: { favorite: @favorite}
        else
          render json: { message: 'Some fields are invalid', errors: @favorite.errors }, status: :bad_request
        end
      end

      def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
        render json: { message: "Deleted favorite #{params[:id]}"}
      end


    private

    def favorite_params
        params.require(:favorite)
            .permit(:event_service_id, 
            :user_id)
    end

end



