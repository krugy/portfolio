<html>
<head>

<!-- Disable Caching in browser -->
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />

<script type="text/javascript" src="scripts.js"></script>

<style type="text/css">
	@font-face {
		font-family: trajan;
		src: url(trajan.ttf);
	}
	.topDiv {
		border-bottom: 5px solid black;
		background-color: lightblue;
		width: 100%;
		padding: 5px 0;
		text-align: center;
		font-family: trajan;
	}
	.albumColumn {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: trajan;
	}
	.albumList {
		display: flex;
		padding: 15px;
		align-items: center;
	}
	.albumList img {
		height: 150px;
		width: 150px;
		margin-right: 25px;
		/*horizontal, vertical, blue, color*/
		box-shadow: 5px -5px 15px rgba(34,34,34,0.6);
	}
	.albumList p {
		color: black;
		width: 315px;
		text-shadow: 0 0 10px rgba(34, 34, 34, .6);
	}
</style>
</head>

<body bgcolor="white">
<?php include 'coheedNav.php';?>

<br>
<script>printAlbum();</script>
</body>

</html>