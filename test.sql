SELECT `UserConversation`.`id`, `UserConversation`.`user_id` AS `userId`, 
`UserConversation`.`conversation_id` AS `conversationId`, `UserConversation`.`role`, 
`UserConversation`.`createdAt`, `UserConversation`.`updatedAt`, `conversations`.`id`
 AS `conversations.id`, `conversations`.`is_group` AS `conversations.isGroup`, 
 `conversations`.`title` AS `conversations.title`, `conversations`.`createdAt`
  AS `conversations.createdAt`, `conversations`.`updatedAt` AS `conversations.updatedAt`, 
  `conversations`.`userId` AS `conversations.userId` FROM `user_conversation` AS `UserConversation`
 LEFT OUTER JOIN `conversation` AS `conversations`
  ON `UserConversation`.`id` = `conversations`.`userId`