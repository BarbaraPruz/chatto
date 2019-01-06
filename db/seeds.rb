u1 = User.create(:screen_name => "Lou", :email => "lou@domain.com", :password => "test")
u2 = User.create(:screen_name => "admin", :email => "admin@domain.com", :password => "test", :admin => "true")
u3 = User.create(:screen_name => "Bud", :email => "bud@domain.com", :password => "test")

r1 = Room.create(:name => "General")
r2 = Room.create(:name => "Sports")
r3 = Room.create(:name => "Travel")
