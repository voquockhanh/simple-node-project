-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: bezkoder
-- ------------------------------------------------------
-- Server version	8.0.27

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

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Laptop',0,'2021-11-27 10:20:01','2021-11-27 10:20:01'),(2,'Cell Phone',0,'2021-11-27 10:20:01','2021-11-27 10:20:01'),(3,'Tablet',0,'2021-11-27 10:20:01','2021-11-27 10:20:01');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Apple MacBook Pro 16-inch with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 64GB RAM, 1TB SSD, AMD Radeon Pro 5500M 8GB, Space Gray, Late 2019',3564,5,'{\"year\": 2019, \"details\": \"\"}',4,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1631413661/bezkoder-course/Apple_MacBook_Pro_16-inch_with_Touch_Bar_9th-Gen_8-Core_Intel_i9_2.4GHz_64GB_RAM_1TB_SSD_AMD_Radeon_Pro_5500M_8GB_Space_Gray_Late_2019_yxhyfn.jpg\"}','2021-10-09 11:24:26','2021-10-09 11:24:26',1),(2,'Apple MacBook Air 13.3-inch with Retina Display, 1.1GHz Quad-Core Intel Core i5, 8GB Memory, 256GB SSD, Silver (Early 2020)',999,5,'{\"year\": 2020, \"details\": \"\"}',3,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1631413661/bezkoder-course/Apple_MacBook_Air_13.-inch_with_Retina_Display_1.1GHz_Quad-Core_Intel_Core_i5_8GB_Memory_256GB_SSD_Silver_Early_2020_pyvg97.jpg\"}','2021-10-09 11:25:34','2021-10-09 11:25:34',1),(3,'Apple MacBook Pro 13.3-inch with Retina Display, M1 Chip with 8-Core CPU and 8-Core GPU, 16GB Memory, 512GB SSD, Space Gray, Late 2020',1599,6,'{\"year\": 2020, \"details\": \"\"}',5,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1631413661/bezkoder-course/Apple_MacBook_Pro_13.3-inch_with_Retina_Display_M1_Chip_with_8-Core_CPU_and_8-Core_GPU_16GB_Memory_512GB_SSD_Space_Gray_Late_2020_z3z20s.jpg\"}','2021-10-09 11:25:47','2021-10-09 11:25:47',1),(4,'Apple MacBook Air 13.3-inch with Retina Display, 1.1GHz Quad-Core Intel Core i5, 8GB Memory, 256GB SSD, Gold (Early 2020)',989,3,'{\"year\": 2020, \"details\": \"\"}',4,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1631413661/bezkoder-course/Apple_MacBook_Air_13.3-inch_with_Retina_Display_1.1GHz_Quad-Core_Intel_Core_i5_8GB_Memory_256GB_SSD_Gold_Early_2020_saqxnb.jpg\"}','2021-10-09 11:25:59','2021-10-09 11:25:59',1),(5,'Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage) - Silver (Previous Model)',1099,8,'{\"year\": 2018, \"details\": \"\"}',5,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1631413661/bezkoder-course/Apple_MacBook_Pro_13-inch_8GB_RAM_256GB_SSD_Storage_-_Silver_Previous_Model_znt6zp.jpg\"}','2021-10-09 11:26:03','2021-10-09 11:26:03',1),(6,'Apple MacBook Pro 16-inch with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 64GB RAM, 1TB SSD, AMD Radeon Pro 5500M 8GB, Space Gray, Late 2019',3260,15,'{\"year\": 2019, \"details\": \"\"}',3,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1631413661/bezkoder-course/2019_Apple_MacBook_Pro_16-inch_16GB_RAM_512GB_Storage_2.6GHz_Intel_Core_i7_-_Space_Gray_i2k3oj.jpg\"}','2021-10-09 11:26:09','2021-10-09 11:26:09',1),(7,'Fire 7 tablet, 7-inch display, 32 GB, latest model (2019 release), Black',75,20,'{\"year\": 2019, \"details\": \"\"}',4,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1638007081/bezkoder-course/Fire_7_tablet_7-inch_display_32_GB_latest_model_2019_release_Black_qvqitw.jpg\"}','2021-11-27 10:00:58','2021-11-27 10:00:58',3),(8,'Samsung Galaxy Tab S6 Lite 10.4-inch, 64GB Wi-Fi Tablet Oxford Gray - SM-P610NZAAXAR - S Pen Included',320,5,'{\"year\": 2019, \"details\": \"\"}',4,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1638007103/bezkoder-course/Samsung_Galaxy_Tab_S6_Lite_10.4-inch_64GB_Wi-Fi_Tablet_Oxford_Gray_-_SM-P610NZAAXAR_-_S_Pen_Included_nyncsh.jpg\"}','2021-11-27 10:01:50','2021-11-27 10:01:50',3),(9,'2021 Apple 12.9-inch iPad Pro (Wi-Fi, 128GB) - Space Gray',1100,10,'{\"year\": 2021, \"details\": \"\"}',5,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1638007131/bezkoder-course/2021_Apple_12.9-inch_iPad_Pro_Wi_Fi_128GB_-_Space_Gray_s5om9y.jpg\"}','2021-11-27 10:03:08','2021-11-27 10:03:08',3),(10,'2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Sky Blue (4th Generation)',700,5,'{\"year\": 2020, \"details\": \"\"}',5,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1638007149/bezkoder-course/2020_Apple_iPad_Air_10.9-inch_Wi-Fi_64GB_-_Sky_Blue_4th_Generation_cl9obc.jpg\"}','2021-11-27 10:03:09','2021-11-27 10:03:09',3),(11,'2021 Apple 11-inch iPad Pro (Wi-Fi, 512GB) - Space Gray',1225,5,'{\"year\": 2021, \"details\": \"\"}',4,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1638007162/bezkoder-course/2021_Apple_11-inch_iPad_Pro_Wi-Fi_512GB_-_Space_Gray_jozqfo.jpg\"}','2021-11-27 10:03:09','2021-11-27 10:03:09',3),(12,'2019 Apple iPad (10.2-inch, Wi-Fi, 128GB) - Silver (7th Generation)',410,5,'{\"year\": 2019, \"details\": \"\"}',3,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1638007178/bezkoder-course/2019_Apple_iPad_10.2-inch_Wi-Fi_128GB_-_Silver_7th_Generation_bnbypq.jpg\"}','2021-11-27 10:04:06','2021-11-27 10:04:06',3),(13,'Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)',200,33,'{\"year\": 2021, \"details\": \"\"}',5,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1638008255/bezkoder-course/Apple_iPhone_12_Pro_Max_128GB_Pacific_Blue_-_Unlocked_Renewed_Premium_ta1jox.jpg\"}','2021-11-27 10:19:04','2021-11-27 10:19:04',2),(14,'Moto G stylus | 2020 | Unlocked | Made for US by Motorola | 4/128GB | 48MP Camera | Indigo',999,8,'{\"year\": 2020, \"details\": \"\"}',4,'{\"thumnail\": \"https://res.cloudinary.com/tiennguyen/image/upload/v1638008269/bezkoder-course/Moto_G_stylus_2020_Unlocked_Made_for_US_by_Motorola_4128GB_48MP_Camera_Indigo_raj1oy.jpg\"}','2021-11-27 10:19:04','2021-11-27 10:19:04',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-01  9:25:37
