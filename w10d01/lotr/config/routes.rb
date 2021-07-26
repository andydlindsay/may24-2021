Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :locations
  # resources :characters

  resources :locations do
    resources :characters
  end

  resources :characters
end
