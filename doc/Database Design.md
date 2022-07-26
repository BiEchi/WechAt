# Database Design

[TOC]

## Database Schema CREATE DDLs

```sql
-- MySQL dump 10.13  Distrib 8.0.26, for macos11.3 (x86_64)
--
-- Host: 34.136.66.195    Database: wechat
-- ------------------------------------------------------
-- Server version	8.0.26-google

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '9d9bf184-f7f6-11ec-a3c4-42010a800002:1-239296';

--
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admin` (
  `User_id` int NOT NULL,
  `Session_id` int NOT NULL,
  `Time_begin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Time_end` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Session_id`) USING BTREE,
  KEY `se__id` (`Session_id`),
  CONSTRAINT `se__id` FOREIGN KEY (`Session_id`) REFERENCES `Chat_session` (`Session_id`),
  CONSTRAINT `usid__` FOREIGN KEY (`User_id`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Append_msg`
--

DROP TABLE IF EXISTS `Append_msg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Append_msg` (
  `Snippet_id` int DEFAULT NULL,
  `Msg_id` int DEFAULT NULL,
  KEY `snipid` (`Snippet_id`),
  KEY `msgid` (`Msg_id`),
  CONSTRAINT `msgid` FOREIGN KEY (`Msg_id`) REFERENCES `Msg` (`Msg_id`),
  CONSTRAINT `snippet` FOREIGN KEY (`Snippet_id`) REFERENCES `Snippet` (`Snippet_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Append_post`
--

DROP TABLE IF EXISTS `Append_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Append_post` (
  `Snippet_id` int DEFAULT NULL,
  `Post_id` int DEFAULT NULL,
  KEY `snippetid` (`Snippet_id`),
  CONSTRAINT `snippetid` FOREIGN KEY (`Snippet_id`) REFERENCES `Snippet` (`Snippet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Bottle`
--

DROP TABLE IF EXISTS `Bottle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bottle` (
  `Bottle_id` int NOT NULL,
  `Bottle_time` text,
  `User_id_from` int DEFAULT NULL,
  `User_id_to` int DEFAULT NULL,
  `Status` varchar(6) DEFAULT NULL,
  `Bottle_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`Bottle_id`),
  KEY `fromuser` (`User_id_from`),
  KEY `touser` (`User_id_to`),
  CONSTRAINT `fromuser` FOREIGN KEY (`User_id_from`) REFERENCES `Chat_user` (`User_id`),
  CONSTRAINT `touser` FOREIGN KEY (`User_id_to`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Chat_pri_session`
--

DROP TABLE IF EXISTS `Chat_pri_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Chat_pri_session` (
  `Session_pri_id` int NOT NULL,
  `Pending_flag` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Blacklist_flag` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Session_pri_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Chat_session`
--

DROP TABLE IF EXISTS `Chat_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Chat_session` (
  `Session_id` int NOT NULL,
  `Chat_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Chat_user`
--

DROP TABLE IF EXISTS `Chat_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Chat_user` (
  `User_id` int NOT NULL,
  `User_name` varchar(255) NOT NULL,
  `User_password` varchar(255) NOT NULL,
  `Avator` varchar(255) DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `Chatbot_flag` int DEFAULT NULL,
  `Status` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`User_id`),
  KEY `User_name` (`User_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Contain`
--

DROP TABLE IF EXISTS `Contain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contain` (
  `Msg_id` int NOT NULL,
  `Session_id` int NOT NULL,
  PRIMARY KEY (`Session_id`,`Msg_id`),
  KEY `Msg_id` (`Msg_id`),
  CONSTRAINT `Contain_ibfk_1` FOREIGN KEY (`Session_id`) REFERENCES `Chat_session` (`Session_id`),
  CONSTRAINT `Contain_ibfk_2` FOREIGN KEY (`Msg_id`) REFERENCES `Msg` (`Msg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Contain_pri`
--

DROP TABLE IF EXISTS `Contain_pri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contain_pri` (
  `Msg_id` int NOT NULL,
  `Session_pri_id` int NOT NULL,
  PRIMARY KEY (`Session_pri_id`,`Msg_id`),
  KEY `Msg_id` (`Msg_id`),
  CONSTRAINT `Contain_pri_ibfk_1` FOREIGN KEY (`Msg_id`) REFERENCES `Msg` (`Msg_id`),
  CONSTRAINT `Contain_pri_ibfk_2` FOREIGN KEY (`Session_pri_id`) REFERENCES `Chat_pri_session` (`Session_pri_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Join`
--

DROP TABLE IF EXISTS `Join`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Join` (
  `User_id` int NOT NULL,
  `Session_id` int NOT NULL,
  `Time_begin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Time_end` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Session_id`) USING BTREE,
  KEY `seid` (`Session_id`),
  CONSTRAINT `seid` FOREIGN KEY (`Session_id`) REFERENCES `Chat_session` (`Session_id`),
  CONSTRAINT `user___id` FOREIGN KEY (`User_id`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Join_pri`
--

DROP TABLE IF EXISTS `Join_pri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Join_pri` (
  `user1_id` int NOT NULL,
  `user2_id` int NOT NULL,
  `Session_pri_id` int DEFAULT NULL,
  `time_begin` varchar(255) DEFAULT NULL,
  `time_end` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user1_id`,`user2_id`),
  KEY `user2` (`user2_id`),
  KEY `session_pri` (`Session_pri_id`),
  CONSTRAINT `session_pri` FOREIGN KEY (`Session_pri_id`) REFERENCES `Chat_pri_session` (`Session_pri_id`),
  CONSTRAINT `user1` FOREIGN KEY (`user1_id`) REFERENCES `Chat_user` (`User_id`),
  CONSTRAINT `user2` FOREIGN KEY (`user2_id`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Msg`
--

DROP TABLE IF EXISTS `Msg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Msg` (
  `Msg_id` int NOT NULL,
  `Msg_time` text,
  `Msg_status` varchar(7) DEFAULT NULL,
  `Msg_sender` int DEFAULT NULL,
  `Msg_content` varchar(265) DEFAULT NULL,
  PRIMARY KEY (`Msg_id`),
  KEY `the_sender` (`Msg_sender`),
  CONSTRAINT `the_sender` FOREIGN KEY (`Msg_sender`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Post`
--

DROP TABLE IF EXISTS `Post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Post` (
  `Post_id` int NOT NULL,
  `Post_sender` int DEFAULT NULL,
  `Publish_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Post_content` varchar(12000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Post_id`),
  KEY `sender` (`Post_sender`),
  CONSTRAINT `sender` FOREIGN KEY (`Post_sender`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Post_Like`
--

DROP TABLE IF EXISTS `Post_Like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Post_Like` (
  `User_id` int NOT NULL,
  `Post_id` int NOT NULL,
  `Like_amount` int DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Post_id`),
  KEY `post` (`Post_id`),
  CONSTRAINT `post` FOREIGN KEY (`Post_id`) REFERENCES `Post` (`Post_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user` FOREIGN KEY (`User_id`) REFERENCES `Chat_user` (`User_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `Product_id` int NOT NULL,
  `User_id` int DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Price` varchar(255) DEFAULT NULL,
  `Photo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Product_id`),
  KEY `userid` (`User_id`),
  CONSTRAINT `userid` FOREIGN KEY (`User_id`) REFERENCES `Chat_user` (`User_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Snippet`
--

DROP TABLE IF EXISTS `Snippet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Snippet` (
  `Snippet_id` int NOT NULL,
  `Snippet_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Snippet_content` varchar(12000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Snippet_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-12 22:01:09

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

