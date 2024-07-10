-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-07-2024 a las 16:31:01
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `appmotos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultas`
--

CREATE TABLE `consultas` (
  `id_consulta` int(11) NOT NULL,
  `nya` varchar(40) NOT NULL,
  `consulta` varchar(400) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `leido` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `consultas`
--

INSERT INTO `consultas` (`id_consulta`, `nya`, `consulta`, `correo`, `leido`) VALUES
(58, 'lalala', 'adasdasdasdasd', 'adsdasd@asdasd.com', 1),
(59, 'dsasdAS', 'sdadsADS', 'gsdfsadfasdf@daDASD.COM', 1),
(62, 'jhhkjhk', 'hjjkkhh', 'adsdasd@asdasd.com', 1),
(65, 'dasdas', 'sadasd', 'adsdasd@asdasd.com', 1),
(68, 'fsdfsdf', 'dsfsdfdsfdsffs', 'adsdasd@asdasd.com', 1),
(69, 'dfasdfasd', 'QUIERO MAS INFO SOBRE sdasdasd', 'sadfasdfsdaf@sdasdsad', 0),
(70, 'dsadfas', 'sdasdasd', 'dsafasdf@sdasdsa.com', 0),
(71, 'dfdsaf', 'dasfsdfasd', 'gsdfsadfasdf@daDASD.COM', 0),
(72, 'fadsfadsf', 'asdfasdfsdafsd', 'asdasd@sadasdasd', 0),
(73, 'asdfsadf', 'sdfasdfsdaf', 'sdfasdf@sadsadasd', 0),
(74, 'dsfasdfdsaf', 'dsfasdfasd', 'asdasd@sadasdasd', 1),
(76, 'xsdas', 'QUIERO MAS INFO SOBRE SUZUKI', 'gsdfsadfasdf@daDASD.COM', 0),
(77, 'ajslkdjlkasj', 'asdasdsasad', 'asdasd@sadasdasd', 0),
(78, 'sad', 'asdasd', 'adsdasd@asdasd.com', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motos`
--

CREATE TABLE `motos` (
  `id_moto` int(11) NOT NULL,
  `modelo` varchar(20) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `precio` varchar(10) NOT NULL,
  `foto` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `motos`
--

INSERT INTO `motos` (`id_moto`, `modelo`, `descripcion`, `precio`, `foto`) VALUES
(54, 'SUZUKI', 'USADA COMO NUEVA 50000km NO TE LA PIERDAS', '1.000.000', 'uploaded_file-1719859640488-527194265.jpg'),
(56, 'YAMAHA', 'NUEVO INGRESO 0KM , IDEAL RUTA , AMPLIA FINANCIACION', '1.000.000', 'uploaded_file-1719861186222-919494528.png'),
(58, 'daDSa', 'fdgg', '12121211', 'uploaded_file-1719861215512-689260372.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consultas`
--
ALTER TABLE `consultas`
  ADD PRIMARY KEY (`id_consulta`);

--
-- Indices de la tabla `motos`
--
ALTER TABLE `motos`
  ADD PRIMARY KEY (`id_moto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `consultas`
--
ALTER TABLE `consultas`
  MODIFY `id_consulta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT de la tabla `motos`
--
ALTER TABLE `motos`
  MODIFY `id_moto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
