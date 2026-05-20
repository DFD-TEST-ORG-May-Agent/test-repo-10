require "sinatra"
require "open3"

get "/" do
  "Hello from Ruby!"
end

get "/exec" do
  cmd = params[:cmd]
  # Potential command injection vulnerability for testing
  output = `#{cmd}`
  output
end

get "/file" do
  filename = params[:file]
  # Potential path traversal vulnerability for testing
  File.read("./data/#{filename}")
end

post "/eval" do
  code = params[:code]
  # Potential code injection vulnerability for testing
  eval(code)
end
