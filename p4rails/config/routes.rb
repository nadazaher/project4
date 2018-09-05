Rails.application.routes.draw do
  resources :users
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :event_services do
    resources :comments
  end
end