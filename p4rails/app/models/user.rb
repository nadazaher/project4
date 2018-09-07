class User < ApplicationRecord
    has_secure_password
    has_many :comments
    has_many :favorites
    # has_many :event_services
    # , through: :favorites
end
