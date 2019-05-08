json.id @message.id
json.message @message.message
json.image @message.image
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.name @message.user.name
# json.group_id @message.group_id



