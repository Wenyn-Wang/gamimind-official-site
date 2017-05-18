source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'mysql2', '~> 0.4.5'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.0'

gem 'webpacker', '~> 1.2'
gem 'webpacker-react', "~> 0.2.0"

# Use Puma as the app server
# gem 'puma', '~> 3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
## gem 'therubyracer', platforms: :ruby

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
#gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
#gem 'jbuilder', '~> 2.5'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'listen', '~> 3.0.5'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  # gem 'byebug', platform: :mri
  gem 'foreman', '~> 0.84.0'
end

gem "carrierwave", '~> 1.0.0'
gem "fog", '~> 1.38.0'
gem "mini_magick", '~> 4.6.1'
