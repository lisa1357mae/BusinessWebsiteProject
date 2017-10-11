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
	to = SendGrid::Email.new(email:'lisamae135b7@me.com')
	content = SendGrid::Content.new(type:'text/plain', value:'Hello, Email!')
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
