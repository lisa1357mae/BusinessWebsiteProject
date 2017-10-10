require 'sinatra'

get '/' do
  erb :home
end

get '/contact' do	
  erb :contact
end

post '/contact' do
	params.to_s
end

get '/schedule' do
	erb :schedule
end

get '/gallery' do
  erb :gallery
end