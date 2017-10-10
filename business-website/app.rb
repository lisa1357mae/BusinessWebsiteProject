require 'sinatra'

get '/' do
  erb :home
end

get '/' do
  erb :contact
end

get '/about' do
  erb :gallery
end
get '/help' do
  erb :schedule
end
