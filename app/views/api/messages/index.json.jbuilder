json.array! @messages do |message|
  json.message message.message
  json.image message.image
  json.created_at created_at.strftime("%Y/%m/%d %H:%M")
  json.user_name message.user.name
  json.id message.id
end