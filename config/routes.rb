Rails.application.routes.draw do
  root 'pages#home'
  get '/style-guide' => 'pages#style_guide'
end
