# frozen_string_literal: true

u1 = User.create(screen_name: 'Lou', email: 'lou@domain.com', password: 'test')
User.create(screen_name: 'admin',
            email: 'admin@domain.com',
            password: 'test',
            admin: 'true')
u3 = User.create(screen_name: 'Bud', email: 'bud@domain.com', password: 'test')

Room.create(name: 'General', description: 'anything goes')
r2 = Room.create(name: 'Sports', description: 'more than espn')
Room.create(name: 'Travel',
            description: 'its the journey, not the destination')

Message.create(user_id: u1.id, room_id: r2.id, content: "Who's on first?")
Message.create(user_id: u3.id, room_id: r2.id, content: 'Yes')
Message.create(user_id: u1.id,
               room_id: r2.id,
               content: " I mean the fellow's name")
Message.create(user_id: u3.id, room_id: r2.id, content: 'Who')
