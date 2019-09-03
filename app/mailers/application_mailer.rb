# frozen_string_literal: true

# mailer (in case needed later)
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
