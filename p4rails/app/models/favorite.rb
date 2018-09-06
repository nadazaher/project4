class Favorite < ApplicationRecord
    belongs_to :event_service
    belongs_to :user
end
