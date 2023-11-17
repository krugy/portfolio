class albumItem {
	constructor(art, title, year){
		this.art = art
		this.title = title;
		this.year = year;
	}
}

function printAlbum() {
	//take in albumItem list and return html 
	document.write("<div class='albumColumn'>")
	for (let i=0; i<albums.length; i++){
		document.write("<div class='albumList'>")
		document.write("<img src="+albums[i].art+">")
		document.write("<p>" 
						+ albums[i].title 
						+ "<br> ("
						+ albums[i].year
						+ ") </p> <br>")
		document.write("</div>")
	}
	document.write("</div>")
}

const albums = [
	new albumItem("art/SSTB.jpg", "The Second Stage Turbine Blade", 2002),
	new albumItem("art/SE3.jpg", "In Keeping Secrets of Silent Earth: 3", 2003),
	new albumItem("art/apollo1.jpg", "Good Apollo, I'm Burning Star IV Vol I: From Fear Through the Eyes of Madness", 2005),
	new albumItem("art/apollo2.jpg", "Good Apollo, I'm Burning Star IV Vol II:No World for Tomorrow", 2007),
	new albumItem("art/rainbow.jpg", "Year of the Black Rainbow", 2010),
	new albumItem("art/ascension.jpg", "The Afterman: Ascension", 2012),
	new albumItem("art/descension.jpg", "The Afterman: Descension", 2013),
	new albumItem("art/color.jpg", "The Color Before the Sun", 2015),
	new albumItem("art/vaxis1.jpg", "Vaxis - Act I: The Unheavenly Creatures", 2018),
	new albumItem("art/vaxis2.jpg", "Vaxis - Act II: A Window of the Waking Mind", 2022)
];

