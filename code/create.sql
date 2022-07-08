-- Write the SQL code to create the database and tables.

-- Create the database called "wechat"!

CREATE DATABASE IF NOT EXISTS wechat;

-- use this database

USE wechat;

-- ------------------------- ENTITY SETS --------------------------

-- Chat_user(User_id: int, User_name: string, User_password: string, Email: string, Chatbot_flag: boolean, Personal_status: string) PRIMIARY KEY (User_id);
CREATE TABLE Chat_user (
    User_id INTEGER PRIMARY KEY,
    User_name VARCHAR(255),
    User_password VARCHAR(255),
    Email VARCHAR(255),
    Chatbot_flag BOOLEAN,
    Pesonal_status VARCHAR(255)
);

-- Session(Session_id: int, Chat_Name: string) PRIMIARY KEY (Session_id);
CREATE TABLE Chat_session (
    Session_id INTEGER PRIMARY KEY,
    Chat_Name VARCHAR(255)
);

-- Msg(Msg_id: int, Session_id: int, Session_pri_id: int, Session_content: string, Session_time: string, Msg_status: string, Msg_sender: string) PRIMIARY KEY (Msg_id);
CREATE TABLE Msg (
    Msg_id INTEGER PRIMARY KEY,
    Session_id INTEGER,
    Session_pri_id INTEGER,
    Session_content VARCHAR(255),
    Session_time VARCHAR(255),
    Msg_status VARCHAR(255),
    Msg_sender VARCHAR(255)
);

-- Post(Post_id: int, Post_content: string, Post_time: string, Post_sender: string) PRIMARY KEY (Post_id);
CREATE TABLE Post (
    Post_id INTEGER PRIMARY KEY,
    Post_content VARCHAR(255),
    Post_time VARCHAR(255),
    Post_sender VARCHAR(255)
);

-- Snippet(Snippet_id: int, Snippet_content: string, Snippet_link: string) PRIMARY KEY (Snippet_id);
CREATE TABLE Snippet (
    Snippet_id INTEGER PRIMARY KEY,
    Snippet_content VARCHAR(255),
    Snippet_link VARCHAR(255)
);

-- ------------------------- RELATIONSHIP SETS --------------------------

-- Member(User_id: int, Session_id: int, Time_begin: string, Time_end: string) PRIMARY KEY (User_id, Session_id);
CREATE TABLE Member (
    User_id INTEGER,
    Session_id INTEGER,
    Time_begin VARCHAR(255),
    Time_end VARCHAR(255),
    PRIMARY KEY (User_id, Session_id),

    FOREIGN KEY (User_id) REFERENCES Chat_user(User_id),
    FOREIGN KEY (Session_id) REFERENCES Chat_session(Session_id)
);

-- Admin(User_id: int, Session_id: int, Time_begin: string, Time_end: string) PRIMARY KEY (User_id, Session_id);
CREATE TABLE Admin (
    User_id INTEGER,
    Session_id INTEGER,
    Time_begin VARCHAR(255),
    Time_end VARCHAR(255),
    PRIMARY KEY (User_id, Session_id),

    FOREIGN KEY (User_id) REFERENCES Chat_user(User_id),
    FOREIGN KEY (Session_id) REFERENCES Chat_session(Session_id)
);

-- Friendship(Session_pri_id: int, User_id1: int, User_id2: int, Pending_flag: boolean, Blacklist_flag: boolean) PRIMARY KEY (Session_pri_id);
CREATE TABLE Friendship (
    Session_pri_id INTEGER,
    User_id1 INTEGER,
    User_id2 INTEGER,
    Pending_flag BOOLEAN,
    Blacklist_flag BOOLEAN,
    PRIMARY KEY (Session_pri_id),

    FOREIGN KEY (Session_pri_id) REFERENCES Chat_session(Session_id),
    FOREIGN KEY (User_id1) REFERENCES Chat_user(User_id),
    FOREIGN KEY (User_id2) REFERENCES Chat_user(User_id)
);

-- Post_blacklist(Post_id: int, User_id: int) PRIMARY KEY (Post_id, User_id);
CREATE TABLE Post_blacklist (
    Post_id INTEGER,
    User_id INTEGER,
    PRIMARY KEY (Post_id, User_id),

    FOREIGN KEY (Post_id) REFERENCES Post(Post_id),
    FOREIGN KEY (User_id) REFERENCES Chat_user(User_id)
);

-- Post_likelist(Post_id: int, User_id: int, Like_amount: int) PRIMARY KEY (Post_id, User_id);
CREATE TABLE Post_likelist (
    Post_id INTEGER,
    User_id INTEGER,
    Like_amount INTEGER,
    PRIMARY KEY (Post_id, User_id),

    FOREIGN KEY (Post_id) REFERENCES Post(Post_id),
    FOREIGN KEY (User_id) REFERENCES Chat_user(User_id)
);

-- Append_post(Post_id: int, Snippet_id: int) PRIMARY KEY (Post_id, Snippet_id);
CREATE TABLE Append_post (
    Post_id INTEGER,
    Snippet_id INTEGER,
    PRIMARY KEY (Post_id, Snippet_id),

    FOREIGN KEY (Post_id) REFERENCES Post(Post_id),
    FOREIGN KEY (Snippet_id) REFERENCES Snippet(Snippet_id)
);
