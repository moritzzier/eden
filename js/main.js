/**
 * Definition der Konstanten aus denen ausgesucht wird:
 */
const ABC = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '1234567890';
const EMAILS = ['@gmail.com', '@web.de', '@icloud.com', '@gmx.de'];
const FIRST_NAMES = [
	'Maximilan',
	'Alexander',
	'Paul',
	'Elias',
	'Ben',
	'Noah',
	'Leon',
	'Louis',
	'Jonas',
	'Felix',
];
const LAST_NAMES = [
	'Mueller',
	'Schmidt',
	'Schneider',
	'Fischer',
	'Meyer',
	'Weber',
	'Hofmann',
	'Wagner',
	'Becker',
	'Schulz',
];
const CITYNAMES = [
	'Berlin',
	'Hamburg',
	'München',
	'Köln',
	'Frankfurt',
	'Stuttgard',
	'Düsseldorf',
	'Dortmund',
	'Essen',
	'Leipzig',
];
const POSTALCODES = [
	'50339',
	'43366',
	'76431',
	'50669',
	'40187',
	'38765',
	'50389',
	'70489',
	'78594',
	'46378',
];
const STREET_NAMES = [
	'Hauptstrasse',
	'Bahnhofstrasse',
	'Kirchstrasse',
	'Schillerstrasse',
	'Goethestrasse',
	'Friedhofstrasse',
	'Beethovenstrasse',
];

/**
 * Clickhandler für das Generieren der Identität
 */
function OnGenerate() {
	let strOut = '';
	let txtOut = null;
	let identity = null;

	txtOut = document.getElementById('txt_out');

	if (txtOut == null || txtOut == undefined) {
		throw 'Textfeld konnte nicht gefunden werden';
	}

	identity = generateIdentity();
	for(elem in identity) {
		if(!identity.hasOwnProperty(elem)) {
			throw "Element wurde aufgezählt welche auf dem Objekt nicht vorhanden ist";
		}
		strOut += `${identity[elem]}&#13;&#10;`;
	}

	document.getElementById('txt_out').innerHTML = strOut;
}
/**
 * Wird ausgeführt wenn alle Websiteelemente fertig sind
 */
window.addEventListener('load', () => {
	let btnGen = null;
	btnGen = document.getElementById('btn_gen');
	btnGen.addEventListener('click', OnGenerate);
});

/**
 * Generiert eine Identität und gibt diese dann als Objekt zurück
 * @returns {Object} Objekt der indentität
 */
function generateIdentity() {
	let identity = {
		firstName: null,
		lastName: null,
		streetName: null,
		streetNumber: null,
		postalCode: null,
		cityName: null,
		birthday: null,
		mailAdress: null,
		userName: null,
	};

	let name = generateName();

	identity.firstName = name[0];
	identity.lastName = name[1];

	let adress = generateAdress();

	identity.streetName = adress[0];
	identity.streetNumber = adress[1];
	identity.postalCode = adress[2];
	identity.cityName = adress[3];

	identity.birthday = generateBirthday().toLocaleDateString();
	identity.mailAdress = generateMail();
	identity.userName = generateUserName(identity.firstName, identity.lastName);

	return identity;
}

/**
 * Generiert einen Vornamen und einen Nachnamen
 * @returns [firstName, lastName]
 */
function generateName() {
	let firstName = null;
	let lastName = null;

	firstName = getSample(FIRST_NAMES);
	lastName = getSample(LAST_NAMES);

	return [firstName, lastName];
}

/**
 * Generiert eine fiktive Adresse
 * @returns [streetName, streetNumber, postalCode, cityName]
 */
function generateAdress() {
	let streetName = null;
	let streetNumber = null;
	let postalCode = null;
	let cityName = null;

	streetName = getSample(STREET_NAMES);
	streetNumber = Math.ceil(Math.random() * 10);
	postalCode = getSample(POSTALCODES);
	cityName = getSample(CITYNAMES);

	return [streetName, streetNumber, postalCode, cityName];
}

/**
 * Generiert einen Geburtstag zwischen 1950 und 1999
 * @returns Date
 */
function generateBirthday() {
	let date = new Date();
	let day = null;
	let month = null;
	let year = null;

	day = Math.floor(Math.random() * 28) + 1;
	month = Math.floor(Math.random() * 12) + 1;
	year = Math.floor(Math.random() * 49) + 1950;

	date.setFullYear(year, month - 1, day);

	return date;
}

/**
 * Generiert eine Email-Adresse
 * @returns string
 */
function generateMail() {
	let prefix = "";
	let suffix = null;

	for (let i = 0; i < 20; i++) {
		prefix += getSample(ABC);
	}

	suffix = getSample(EMAILS);

	return `${prefix}${suffix}`;
}

/**
 * Generiert aus dem echten Namen eine zufälligen Usernamen
 * @param {string} firstName Vorname der Person
 * @param {string} lastName Nachname der Person
 * @returns string
 */
function generateUserName(firstName, lastName) {
	let username = null;
	
	if(typeof firstName !== 'string' || typeof lastName !== 'string') {
		throw "Vor- oder Nachname ist kein string";
	}

	username = firstName;
	username += lastName.charAt(0);
	username += (Math.floor(Math.random() * 1000) + 1).toString();

	return username;
}

/**
 * Gibt aus einem Array ein zufälliges Element zurück
 * @param {Array} Array Array aus welchem ein Element zurückgegeben werden soll
 */
function getSample(array) {
	if (array === undefined || array.length < 1) {
		throw 'Array ist fehlerhaft';
	}

	return array[Math.floor(Math.random() * array.length)];
}
