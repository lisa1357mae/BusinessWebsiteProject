require 'dotenv/load'
require 'sendgrid-ruby'
require 'sinatra'

get '/' do
  @class = "home"	
  erb :home
end

get '/contact' do
  @class = "contact"		
  erb :contact
end

post '/contact' do

	from = SendGrid::Email.new(email: params[:email])
	subject = 'Hello World from the SendGrid Ruby Library!'
	to = SendGrid::Email.new(email:'embarnese3@hotmail.com')
	content = SendGrid::Content.new(type:'text/plain', value:params["message"])
	mail = SendGrid::Mail.new(from, subject, to, content)
	sg = SendGrid::API.new(api_key:ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)

	puts response.status_code
	puts response.body

	response.body.to_s
end

get '/schedule' do
	@class = "schedule"
	erb :schedule
end

get '/gallery' do
	@class = "gallery"
  erb :gallery
end

get '/gallery' do
  erb :gallery
end

get '/schedule' do
  erb :schedule
end
