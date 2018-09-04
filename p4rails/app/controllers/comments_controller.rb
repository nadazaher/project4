class CommentsController < ApplicationController

    def index
        if (params[:event_service_id])
          @comments = EventService.find(params[:event_service_id]).comments
        else
          @comments = Comment.all
        end
        render json: { comments: @comments}
      end
  
      def show
        @comment = Comment.find(params[:id])
        render json: { comment: @comment}
      end
  
      def create
        if (params[:event_service_id])
          @comment = EventService.find(params[:event_service_id]).comments.new(comment_params)
        else
          @comment = Comment.new(comment_params)
        end
        if @comment.save
          render json: { commen: @comment }
        else
          render json: { message: 'Recheck your fields', errors: @comment.errors }, status: :bad_request
        end
      end
  
      def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
          render json: { comment: @comment}
        else
          render json: { message: 'Recheck your fields', errors: @comment.errors }, status: :bad_request
        end
      end
  
      def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: { message: "Deleted comment #{params[:id]}"}
      end
  
      private
      
      def comment_params
        params
          .require(:comment)
          .permit(
            :event_service_id,
            :content
          )
      end
end
