require 'sinatra'

get '/' do
  erb :home
end

get '/contact' do
  erb :contact
end

get '/gallery' do
  erb :gallery
end
get '/schedule' do
  erb :schedule
end
