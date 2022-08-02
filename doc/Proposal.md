# Project Proposal

[TOC]

## Summary

This project aims to create a group chat front-end with a DBMS controlling the backend SQL data. 

The chatroom system should bear basic functionalities including user login system, groupchat system (including private chats), friend system, and searching for the keywords in the chat history.


## Realness

> Describe what data is stored in the database. (Where is the data from, what attributes and information would be stored?)

![UML](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-02-200329.png)

## Dataset

We decide to inject our dataset with the corpus from the Internet before we implement the messaging application. We currently decide to use the Douban Chinese dialog corpus for our project initialization. Other stuff like message time is going to be generated automatically.

https://github.com/MarkWuNLP/MultiTurnResponseSelection

## Creativity, Application And Usefulness

This course project is the sub-project of **IntLife**:

![img](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-033128.png)

What the mother project has already done (shown in red):

![image-20220705230232295](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-040232.png)

And what we want to do is the blue one: message (group chats). Here we’ll show what we’ve already done in our mother project.

## Mother Project Tabs

These are the mother project tabs (without the “message” tab).

![image-20220705231705510](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-041706.png)

![image-20220705231721007](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-041721.png)

![image-20220705231735205](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-041735.png)

![image-20220705231755409](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-041806.png)

## Description

The DBML desgin above is the mother project for this course project. We want to integrate our **chatroom** (the “message” tab) into the system, with several abstracted tables from the mother project:

![UML](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-02-221801.png)

### Assumptions

1.   One product can only be created by one Chat_user, but a Chat_user may create multiple product or not.
2.   One Chat_user can have multiple Msg histories which belongs to his chat.
3.   One Msg history can only belong to one Chat_user.
4.   Chat_user can see multiple post, but one post can only posted by one chat_user.

### Per-entity description

One **Chat_user** can have multiple **Msg** histories which belongs to his chat .One **Msg** history can only belong to one **Chat_user**
**Chat_user** can write multiple **post**, but one **post** can only posted by one **chat_user**.
One **snippet**  can only belong to one **Msg** , one **Msg** may have multiple **snippet**.
One **chat_session** has one or more **Msg** , one **Msg **only belong to one **chat_session**.
One **chat_user** can join at least one  **chat_session** because chat_box will always chat with chat_user ,one **chat_session** includes at least one **chat_user**.
One **chat_user **can **administrate** at least one  **chat_session** because chat_box will always chat with chat_user ,one **chat_session** includes at least one **chat_user **as **administrater**.
One **post** can have multiple **snippets**, one **snippet **can only belong to one **post**.
One **bottle** is sent by one **chat_user**, but one **chat_user** can receive multiple **bottles**.
One **product** can only be sold by one **chat_user**, one **chat_user** can sell multiple **products**.
One **product** can **link** multiple **snippets**, but one **snippet** can only **be linked** to one **product**.
One **chat_user** can **like or be blacklisted** in multiple post, but one **post** can only have one multiple **post_like/blacklist** relation.

### Attributes

● The chat database consists of **product**, **chat_user**, **bottle**, **post**, **chat_session**, **messages** (msg), **snippet**

● A **product** has its **id**, which can be used to identify its **URL**, **name**, and **price**. Each product maintains a **user_id** which is the buyer's id.

● A **chat_user** is the user in the chat app. It has a **name**, **password**, **email**, its chatbot with **flag**, and the user **status**.

● A **bottle** is a random message sent by a user and received by a user, which is like a random private chat box. It has a unique **id**, the chat starts **time**, sender and receiver's **id**s, as well as the chat **content** and **status** (if it is read).

● A **post** is a post from a user, which contains the **time** and **content**. Post has a unique **id** and has to be posted by a specific **user id**.

● A **sinnpet** is the link referenced in the post. The snippet has its **content** and **url**.

● A **chat_session** is the group chat session among random number of users (more than two user). It has a **unique id** and random **name**.

● A **message** is a message from a user to a group chat or a private chat, which might have either the **private session i**d or the **session id**. Each message has the **time** and **content**; also, it can be traced to **sender**, and message can have **status**.

## Dataset Schema 

```sql
Admin(Column1:user_id, Column2: session_id) [PK], Column3: user_id [FK to chat_user.column], Column4: session_id [FK to chat_session.column], Column5:time_begin, Column6:time_end)

Join (Column1:user_id, Column2:session_id) [PK], Column3: user_id [FK to chat_user.column], Column4: session_id [FK to chat_session.column], Column5:time_begin, Column6:time_end)

Friendship (Column1:user_id, Column2:msg_id) [PK], Column3:user_id [FK to user_chat.column], Column4:msg_id [FK to msg.column], Column5:user_id1,Column6:user_id2, Column7:Pending_flag, Column8:blacklist_flag )

Link(Column1:product_id, Column2:snippet _id) [PK], Column3:snippet_id [FK to snippet.column], Column4: user _id [FK to chat_user])

Post((Column1:post_id) [PK], Column2: post_sender [FK to chat_user.column], Column3:post_content, Column4:publish time)

Bottle((Column1:bottle_id) [PK], Column2: user_id2 [FK to chat_user.column], Column3: user_id2 [FK to chat_user.column], Column3:status, Column4:content, Column5:time)

Sell(Column1:product_id, Column2:user _id) [PK], Column3:product_id [FK to product.column], Column4: user _id [FK to chat_user])
msg(Column1:msg_id [PK], Column2: Session_id [FK to chat_session.column], Column3: Session_pri_id [FK to friendship.column], Column4: Msg_time, Column5: Msg_status, Columns6: Msg_sender [FK to Chat_user.column], Column7: Msg_content)

Append_msg(Column1:snippet_id, Column2:msg _id) [PK], Column3:snippet_id [FK to snippet.column], Column4: msgid [FK to Msg])

Post_like(Column1:user_id, Column2:post _id) [PK], Column3:user_id [FK to chat_user.column], Column4: post_id [FK to Msg.column],columen5:Like_black_flag,column6:like_amount)
```

## Functionalities

> What are the basic functions of your web application? (What can users of this website do? Which simple and complex features are there?)

| Function | Details | 
| --- | --- | 
| login | centralized server, encryption and decryption, feedback prompts, mallicious detection. |
| groupchat | groupchat and private chat, invite a friend to the groupchat, admins can delete group members, send a message. |
| friends | friend list, blacklist |
| keyword search | `LIKE '%keyword%'` |
| Moments | share highlights |

## UI Mockup

### Chat Session, User Information, Product, Post and Message

![UI](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-044235.png)

### Alternative Way

![image-20220705233357874](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-043358.png)

## Work Distribution

| Work | Member |
| --- | --- |
| Front-end | Jack |
| Chatbots | Jack |
| Back-end | Zhongqi |
| Login system | Jiayuan |
| Front-back Interaction | Puyu |
