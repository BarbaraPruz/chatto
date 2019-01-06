Rails.application.routes.draw do

  # user and sessions
  root 'application#welcome', as: :welcome

  get '/login' => 'application#welcome'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy' 

  resources :users
  
end