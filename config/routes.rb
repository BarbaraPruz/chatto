Rails.application.routes.draw do
  
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }

  resources :rooms do
    resources :messages
  end
  get 'rooms/:id/updates/:message_id', to: 'rooms#updates'

end
