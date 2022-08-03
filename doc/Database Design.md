# Database Design

[TOC]

## Screenshot of the GCP Connection

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-001108.png" alt="image-20220802191107966" style="zoom:50%;" />

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-001442.png" alt="image-20220802191441600" style="zoom:50%;" />

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-001555.png" alt="image-20220802191554857" style="zoom:50%;" />

## Database Schema CREATE DDLs

```sql
/*
 Navicat MySQL Data Transfer

 Source Server         : wechat
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : 35.225.243.81:3306
 Source Schema         : wechat

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 02/08/2022 19:19:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Admin
-- ----------------------------
DROP TABLE IF EXISTS `Admin`;
CREATE TABLE `Admin` (
  `User_id` int NOT NULL,
  `Session_id` int NOT NULL,
  `Time_begin` date DEFAULT NULL,
  `Time_end` date DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Session_id`) USING BTREE,
  KEY `se__id` (`Session_id`),
  KEY `idx_Time_begin` (`Time_begin`),
  CONSTRAINT `se__id` FOREIGN KEY (`Session_id`) REFERENCES `Chat_session` (`Session_id`),
  CONSTRAINT `usid__` FOREIGN KEY (`User_id`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Append_msg
-- ----------------------------
DROP TABLE IF EXISTS `Append_msg`;
CREATE TABLE `Append_msg` (
  `Snippet_id` int DEFAULT NULL,
  `Msg_id` int DEFAULT NULL,
  KEY `snipid` (`Snippet_id`),
  KEY `msgid` (`Msg_id`),
  CONSTRAINT `msgid` FOREIGN KEY (`Msg_id`) REFERENCES `Msg` (`Msg_id`),
  CONSTRAINT `snippet` FOREIGN KEY (`Snippet_id`) REFERENCES `Snippet` (`Snippet_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Append_post
-- ----------------------------
DROP TABLE IF EXISTS `Append_post`;
CREATE TABLE `Append_post` (
  `Snippet_id` int DEFAULT NULL,
  `Post_id` int DEFAULT NULL,
  KEY `snippetid` (`Snippet_id`),
  CONSTRAINT `snippetid` FOREIGN KEY (`Snippet_id`) REFERENCES `Snippet` (`Snippet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Bottle
-- ----------------------------
DROP TABLE IF EXISTS `Bottle`;
CREATE TABLE `Bottle` (
  `Bottle_id` int NOT NULL AUTO_INCREMENT,
  `Bottle_time` text,
  `User_id_from` int NOT NULL,
  `User_id_to` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Bottle_content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Bottle_id`),
  UNIQUE KEY `Bottle_id_UNIQUE` (`Bottle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Chat_pri_session
-- ----------------------------
DROP TABLE IF EXISTS `Chat_pri_session`;
CREATE TABLE `Chat_pri_session` (
  `Session_pri_id` int NOT NULL,
  `Pending_flag` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Blacklist_flag` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Session_pri_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Chat_session
-- ----------------------------
DROP TABLE IF EXISTS `Chat_session`;
CREATE TABLE `Chat_session` (
  `Session_id` int NOT NULL,
  `Chat_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Chat_user
-- ----------------------------
DROP TABLE IF EXISTS `Chat_user`;
CREATE TABLE `Chat_user` (
  `User_id` int NOT NULL AUTO_INCREMENT,
  `User_name` varchar(255) NOT NULL,
  `User_password` varchar(255) NOT NULL,
  `Avator` varchar(255) DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `Chatbot_flag` int DEFAULT '0',
  `Status` varchar(6) DEFAULT 'online',
  PRIMARY KEY (`User_id`),
  KEY `User_name` (`User_name`),
  KEY `idx_User_name` (`User_name`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Contain
-- ----------------------------
DROP TABLE IF EXISTS `Contain`;
CREATE TABLE `Contain` (
  `Msg_id` int NOT NULL,
  `Session_id` int NOT NULL,
  PRIMARY KEY (`Session_id`,`Msg_id`),
  KEY `Msg_id` (`Msg_id`),
  CONSTRAINT `Contain_ibfk_1` FOREIGN KEY (`Session_id`) REFERENCES `Chat_session` (`Session_id`),
  CONSTRAINT `Contain_ibfk_2` FOREIGN KEY (`Msg_id`) REFERENCES `Msg` (`Msg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Contain_pri
-- ----------------------------
DROP TABLE IF EXISTS `Contain_pri`;
CREATE TABLE `Contain_pri` (
  `Msg_id` int NOT NULL,
  `Session_pri_id` int NOT NULL,
  PRIMARY KEY (`Session_pri_id`,`Msg_id`),
  KEY `Msg_id` (`Msg_id`),
  CONSTRAINT `Contain_pri_ibfk_1` FOREIGN KEY (`Msg_id`) REFERENCES `Msg` (`Msg_id`),
  CONSTRAINT `Contain_pri_ibfk_2` FOREIGN KEY (`Session_pri_id`) REFERENCES `Chat_pri_session` (`Session_pri_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Joined
-- ----------------------------
DROP TABLE IF EXISTS `Joined`;
CREATE TABLE `Joined` (
  `User_id` int NOT NULL,
  `Session_id` int NOT NULL,
  `Time_begin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Time_end` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Session_id`) USING BTREE,
  KEY `seid` (`Session_id`),
  CONSTRAINT `seid` FOREIGN KEY (`Session_id`) REFERENCES `Chat_session` (`Session_id`),
  CONSTRAINT `user___id` FOREIGN KEY (`User_id`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Joined_pri
-- ----------------------------
DROP TABLE IF EXISTS `Joined_pri`;
CREATE TABLE `Joined_pri` (
  `User1_id` int NOT NULL,
  `User2_id` int NOT NULL,
  `Session_pri_id` int DEFAULT NULL,
  `Time_begin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Time_end` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`User1_id`,`User2_id`) USING BTREE,
  KEY `user2` (`User2_id`),
  KEY `session_pri` (`Session_pri_id`),
  CONSTRAINT `session_pri` FOREIGN KEY (`Session_pri_id`) REFERENCES `Chat_pri_session` (`Session_pri_id`),
  CONSTRAINT `user1` FOREIGN KEY (`User1_id`) REFERENCES `Chat_user` (`User_id`),
  CONSTRAINT `user2` FOREIGN KEY (`User2_id`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Msg
-- ----------------------------
DROP TABLE IF EXISTS `Msg`;
CREATE TABLE `Msg` (
  `Msg_id` int NOT NULL AUTO_INCREMENT,
  `Msg_time` text,
  `Msg_status` varchar(7) DEFAULT NULL,
  `Msg_sender` int DEFAULT NULL,
  `Msg_content` varchar(265) DEFAULT NULL,
  PRIMARY KEY (`Msg_id`),
  KEY `the_sender` (`Msg_sender`),
  KEY `idx_Msg_Status` (`Msg_status`),
  KEY `idx_Content` (`Msg_content`),
  CONSTRAINT `the_sender` FOREIGN KEY (`Msg_sender`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1035 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Post
-- ----------------------------
DROP TABLE IF EXISTS `Post`;
CREATE TABLE `Post` (
  `Post_id` int NOT NULL AUTO_INCREMENT,
  `Post_sender` int DEFAULT NULL,
  `Publish_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Post_content` varchar(12000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Post_id`),
  KEY `sender` (`Post_sender`),
  CONSTRAINT `sender` FOREIGN KEY (`Post_sender`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Post_Like
-- ----------------------------
DROP TABLE IF EXISTS `Post_Like`;
CREATE TABLE `Post_Like` (
  `User_id` int NOT NULL,
  `Post_id` int NOT NULL,
  `Like_amount` int DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Post_id`),
  KEY `post` (`Post_id`),
  CONSTRAINT `post` FOREIGN KEY (`Post_id`) REFERENCES `Post` (`Post_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user` FOREIGN KEY (`User_id`) REFERENCES `Chat_user` (`User_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Product
-- ----------------------------
DROP TABLE IF EXISTS `Product`;
CREATE TABLE `Product` (
  `Product_id` int NOT NULL AUTO_INCREMENT,
  `User_id` int DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Price` int DEFAULT NULL,
  `Photo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Product_id`),
  KEY `userid` (`User_id`),
  CONSTRAINT `userid` FOREIGN KEY (`User_id`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Snippet
-- ----------------------------
DROP TABLE IF EXISTS `Snippet`;
CREATE TABLE `Snippet` (
  `Snippet_id` int NOT NULL AUTO_INCREMENT,
  `Snippet_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Snippet_content` varchar(12000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Snippet_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1229 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Procedure structure for FetchSessionList
-- ----------------------------
DROP PROCEDURE IF EXISTS `FetchSessionList`;
delimiter ;;
CREATE PROCEDURE `FetchSessionList`(IN User_id_input int)
BEGIN
    DROP TEMPORARY TABLE IF EXISTS _procedure_result_tmp;
    CREATE TEMPORARY TABLE _procedure_result_tmp 
        (
        SELECT Joined.Session_id 
        FROM Joined 
        WHERE Joined.User_id = User_id_input
        )
        UNION
        (
        SELECT Joined_pri.Session_pri_id 
        FROM Joined_pri 
        WHERE Joined_pri.User1_id = User_id_input OR Joined_pri.User2_id = User_id_input
        );
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for keywordfind
-- ----------------------------
DROP PROCEDURE IF EXISTS `keywordfind`;
delimiter ;;
CREATE PROCEDURE `keywordfind`(IN input VARCHAR(10),id INT)
BEGIN
    DROP TEMPORARY TABLE IF EXISTS _procedure_result_tmp;
    CREATE TEMPORARY TABLE _procedure_result_tmp 
        
        (SELECT Chat_user.User_name 
    FROM Chat_user 
    WHERE Chat_user.User_name  LIKE  input AND Chat_user.User_id=id )
        
        UNION
        (
        SELECT Msg.Msg_content
        FROM Msg
        WHERE   Msg.Msg_content LIKE  input AND Msg.Msg_sender=id
        );
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;

```

## 2 Complex Queries

### Query 1: Fetch all the public sessions of the user (including session ID and last message content)

```sql
SELECT * 
FROM Joined NATURAL JOIN Chat_session NATURAL JOIN 
(
  SELECT Session_id, Msg_Content FROM Contain c NATURAL JOIN Msg m NATURAL JOIN 
  ( 
    SELECT Session_id, MAX(Msg_time) AS MAXT 
    FROM Joined 
    NATURAL JOIN Chat_session NATURAL JOIN Contain NATURAL JOIN Msg 
    WHERE User_id = ? 
    GROUP BY Session_id
  ) AS TEMP WHERE TEMP.Session_id = c.Session_id AND m.Msg_time = TEMP.MAXT 
) AS Temp_table2

WHERE User_id = {{user_id}}
```

#### Top 15 Outputs 

![image-20220713231858680](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-14-041859.png)

#### Indexed Performance

```sql
-- EXPLAIN ANALYZE
-- (
-- (SELECT Chat_user.User_name 
-- FROM Chat_user 
-- WHERE Chat_user.User_name  LIKE '%P%'  AND Chat_user.User_id= 12
-- )
-- UNION
-- (
-- SELECT Msg.Msg_content
-- FROM Msg
-- WHERE   Msg.Msg_content LIKE '%is%' AND Msg.Msg_sender= 14
-- )
-- );
-- '-> Table scan on <union temporary>  (cost=1.51..2.51 rows=2) (actual time=0.001..0.002 rows=5 loops=1)\n    -> Union materialize with deduplication  (cost=5.59..6.60 rows=2) (actual time=0.103..0.103 rows=5 loops=1)\n        -> Zero rows (Impossible WHERE noticed after reading const tables)  (cost=0.00..0.00 rows=0) (actual time=0.000..0.000 rows=0 loops=1)\n        -> Filter: (Msg.Msg_content like \'%is%\')  (cost=3.92 rows=2) (actual time=0.065..0.084 rows=5 loops=1)\n            -> Index lookup on Msg using the_sender (Msg_sender=14)  (cost=3.92 rows=15) (actual time=0.054..0.058 rows=15 loops=1)\n'


DROP INDEX idx_Content ON Msg;
DROP INDEX idx_User_name ON Chat_user;
CREATE INDEX idx_Content ON Msg(Msg_content);
CREATE INDEX idx_User_name ON Chat_user(User_name);

EXPLAIN ANALYZE
(
(SELECT Chat_user.User_name 
FROM Chat_user 
WHERE Chat_user.User_name  LIKE '%P%'  AND Chat_user.User_id= 12
)
UNION
(
SELECT Msg.Msg_content
FROM Msg
WHERE   Msg.Msg_content LIKE '%is%' AND Msg.Msg_sender= 14
)
);

-- '-> Table scan on <union temporary>  (cost=1.51..2.51 rows=2) (actual time=0.001..0.002 rows=5 loops=1)\n    -> Union materialize with deduplication  (cost=5.59..6.60 rows=2) (actual time=0.086..0.087 rows=5 loops=1)\n        -> Zero rows (Impossible WHERE noticed after reading const tables)  (cost=0.00..0.00 rows=0) (actual time=0.000..0.000 rows=0 loops=1)\n        -> Filter: (Msg.Msg_content like \'%is%\')  (cost=3.92 rows=2) (actual time=0.051..0.070 rows=5 loops=1)\n            -> Index lookup on Msg using the_sender (Msg_sender=14)  (cost=3.92 rows=15) (actual time=0.041..0.045 rows=15 loops=1)\n'
```

### Query 2: Use a keyword to find all the friends and messages related to this user

```sql
SELECT * 
FROM Post NATURAL JOIN Chat_user
WHERE Post_sender = {{user_id}} OR Post_sender IN 
(
  SELECT User1_id 
  FROM Joined_pri 
  WHERE User2_id = {{user_id}}
) OR Post_sender IN 
(
  SELECT User2_id FROM Joined_pri WHERE User1_id = {{user_id}}
)
```

#### Top 15 Outputs

![image-20220713231917669](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-14-041918.png)

#### Indexed Performance

```sql
-- EXPLAIN ANALYZE
-- (
-- (
-- SELECT Chat_user.User_name 
-- FROM Chat_user 
-- WHERE Chat_user.User_name  LIKE  '%L%'
-- )
-- UNION
-- (
-- SELECT Msg.Msg_content
-- FROM Msg
-- WHERE   Msg.Msg_content LIKE  '%L%'
-- )
-- );
-- '-> Table scan on <union temporary>  (cost=0.03..4.03 rows=122) (actual time=0.002..0.009 rows=87 loops=1)\n    -> Union materialize with deduplication  (cost=126.75..130.75 rows=122) (actual time=2.290..2.304 rows=87 loops=1)\n        -> Filter: (Chat_user.User_name like \'%L%\')  (cost=10.75 rows=11) (actual time=0.109..0.145 rows=38 loops=1)\n            -> Index scan on Chat_user using User_name  (cost=10.75 rows=100) (actual time=0.100..0.116 rows=100 loops=1)\n        -> Filter: (Msg.Msg_content like \'%It%\')  (cost=103.75 rows=111) (actual time=0.046..1.732 rows=511 loops=1)\n            -> Table scan on Msg  (cost=103.75 rows=1000) (actual time=0.044..0.325 rows=1000 loops=1)\n'

DROP INDEX idx_Content ON Msg;
CREATE INDEX idx_Content ON Msg(Msg_content);
EXPLAIN ANALYZE
(
(
SELECT Chat_user.User_name 
FROM Chat_user 
WHERE Chat_user.User_name  LIKE   '%L%' 
)
UNION
(
SELECT Msg.Msg_content
FROM Msg
WHERE   Msg.Msg_content LIKE  '%L%'
)
);
-- '-> Table scan on <union temporary>  (cost=0.03..4.03 rows=122) (actual time=0.002..0.010 rows=87 loops=1)\n    -> Union materialize with deduplication  (cost=126.75..130.75 rows=122) (actual time=2.120..2.136 rows=87 loops=1)\n        -> Filter: (Chat_user.User_name like \'%L%\')  (cost=10.75 rows=11) (actual time=0.047..0.092 rows=38 loops=1)\n            -> Index scan on Chat_user using User_name  (cost=10.75 rows=100) (actual time=0.040..0.060 rows=100 loops=1)\n        -> Filter: (Msg.Msg_content like \'%It%\')  (cost=103.75 rows=111) (actual time=0.032..1.636 rows=511 loops=1)\n            -> Index scan on Msg using idx_Content  (cost=103.75 rows=1000) (actual time=0.031..0.264 rows=1000 loops=1)\n'
```

## Indexing Performance Analysis

We performed the performance analysis of the two queries and saw the indexed one with better performance. For the first query it improves by 1/4, while for the second query it improves by 1/5.

We add an index on Msg_content, and the new execution time will reduce by a quarter of the time it would have taken. Then we add a new index on User_name, and similarly, the new execution time will reduce by a quarter of the previous time. In conclusion, if we add indexes to the keys we use in the SQL queries, the execution time will be reduced.
In our procedure, User_id and Mes_sender have already been set to indexes because they are either primary keys or foreign keys. It is better to keep these indexes (which may not be able to be deleted).

