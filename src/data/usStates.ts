// src/data/usStates.ts

export interface Ville {
    nom: string;
    aVoir?: string[];
    restaurants?: string[];
    hotels?: string[];
    pictures?: string[];
    landscapeImage?: string[];
}

export interface USState {
    code: string;
    name: string;
    landscapeImage?: string | string[];
    image: string;
    capital?: string;
    population?: number;
    superficie?: number;
    devise?: string;
    surnom?: string;
    villes?: (string | Ville)[];
}


const usStates: USState[] = [
    {
        code: "alabama",
        name: "Alabama",
        landscapeImage: ["https://www.americantravel.fr/cdn/shop/articles/pexels-pixabay-208690_717be234-e460-4626-974f-a813f8915e98_1280x.jpg?v=1745836567"],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg",
        capital: "Montgomery",
        population: 4903185,
        superficie: 135767,
        surnom: "The Heart of Dixie",
        devise: "Audemus jura nostra defendere",
        villes: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"]
    },
    {
        code: "alaska",
        name: "Alaska",
        landscapeImage: ["https://www.gngl.com/Content/img/mag/vignettes/grande/1600.jpg"],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/1200px-Flag_of_Alaska.svg.png",
        capital: "Juneau",
        population: 731545,
        superficie: 1723337,
        surnom: "The Last Frontier",
        devise: "North to the Future",
        villes: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"]
    },
    {
        code: "arizona",
        name: "Arizona",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/1200px-Flag_of_Arizona.svg.png",
        capital: "Phoenix",
        population: 7278717,
        superficie: 295234,
        surnom: "The Grand Canyon State",
        devise: "Ditat Deus",
        villes: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"]
    },
    {
        code: "arkansas",
        name: "Arkansas",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg",
        capital: "Little Rock",
        population: 3017804,
        superficie: 137732,
        surnom: "The Natural State",
        devise: "Regnat populus",
        villes: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock"]
    },
    {
        code: "california",
        name: "California",
        landscapeImage: ["https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/vc_perfectbeachtowns_lagunabeach_st_rf_637081844_1280x640_0.jpg.webp?itok=lqsepDyY"],
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/800px-Flag_of_California.svg.png",
        capital: "Sacramento ",
        population: 39538223,
        superficie: 423967,
        surnom: "The Golden State",
        devise: "Eureka",
        villes: [
            {
                nom: "Los Angeles",
                aVoir: ["santa monica"],
                restaurants: ["alex coffee"],
                hotels: ["bates motel"],
                landscapeImage: ["https://www.airzen.fr/wp-content/uploads/2022/09/AdobeStock_400281443-scaled-e1678698392499.jpeg"],
                pictures: ["https://www.losangeles.fr/f/estados-unidos/los-angeles/guia/los-angeles.jpg", "https://www.agoda.com/wp-content/uploads/2024/02/Featured-image-Los-Angeles-during-sunset-1244x700.jpg", "https://i.pinimg.com/1200x/f0/fb/e0/f0fbe0facda3eede1bec4d75901a21b0.jpg"]
            },
            {
                nom: "San Francisco",
                aVoir: ["Golden Gate Bridge", "Alcatraz", "Chinatown"],
                restaurants: ["Tartine Bakery", "Zuni Café"],
                hotels: ["Fairmont", "Hotel Nikko"],
                landscapeImage: ["https://www.airzen.fr/wp-content/uploads/2022/09/AdobeStock_400281443-scaled-e1678698392499.jpeg"],

                pictures: []
            },
            {
                nom: "San Diego",
                aVoir: ["Zoo de San Diego", "La Jolla Cove"],
                restaurants: ["Born and Raised", "Herb & Wood"],
                hotels: ["Pendry San Diego", "Hotel del Coronado"],
                landscapeImage: ["https://www.airzen.fr/wp-content/uploads/2022/09/AdobeStock_400281443-scaled-e1678698392499.jpeg"],

                pictures: []
            }

        ]
    },
    {
        code: "colorado",
        name: "Colorado",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg",
        capital: "Denver",
        population: 5773714,
        superficie: 269601,
        surnom: "The Centennial State",
        devise: "Nil sine numine",
        villes: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"]
    },
    {
        code: "connecticut",
        name: "Connecticut",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/800px-Flag_of_Connecticut.svg.png",
        capital: "Hartford",
        population: 3565287,
        superficie: 14357,
        surnom: "The Constitution State",
        devise: "Qui transtulit sustinet",
        villes: ["Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury"]
    },
    {
        code: "delaware",
        name: "Delaware",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/2560px-Flag_of_Delaware.svg.png",
        capital: "Dover",
        population: 989948,
        superficie: 6446,
        surnom: "The First State",
        devise: "Liberty and Independence",
        villes: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna"]
    },
    {
        code: "florida",
        name: "Florida",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/2560px-Flag_of_Florida.svg.png",
        capital: "Tallahassee",
        population: 21538187,
        superficie: 170312,
        surnom: "The Sunshine State",
        devise: "In God We Trust",
        villes: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg"]
    },
    {
        code: "georgia",
        name: "Georgia",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_the_State_of_Georgia.svg/2560px-Flag_of_the_State_of_Georgia.svg.png",
        capital: "Atlanta",
        population: 10711908,
        superficie: 153910,
        surnom: "The Peach State",
        devise: "Wisdom, Justice, Moderation",
        villes: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah"]
    },
    {
        code: "hawaii",
        name: "Hawaii",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/2560px-Flag_of_Hawaii.svg.png",
        capital: "Honolulu",
        population: 1415872,
        superficie: 28311,
        surnom: "The Aloha State",
        devise: "Ua Mau ke Ea o ka ʻĀina i ka Pono",
        villes: ["Honolulu", "Hilo", "Kailua", "Kaneohe", "Waipahu", "Kahului", "Lahaina"]
    },
    {
        code: "idaho",
        name: "Idaho",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/2560px-Flag_of_Idaho.svg.png",
        capital: "Boise",
        population: 1787065,
        superficie: 216443,
        surnom: "The Gem State",
        devise: "Esto Perpetua",
        villes: ["Boise", "Nampa", "Meridian", "Idaho Falls", "Pocatello"]
    },
    {
        code: "illinois",
        name: "Illinois",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/2560px-Flag_of_Illinois.svg.png",
        capital: "Springfield",
        population: 12671821,
        superficie: 149995,
        surnom: "The Prairie State",
        devise: "State Sovereignty, National Union",
        villes: ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville"]
    },
    {
        code: "indiana",
        name: "Indiana",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/2560px-Flag_of_Indiana.svg.png",
        capital: "Indianapolis",
        population: 6732219,
        superficie: 94326,
        surnom: "The Hoosier State",
        devise: "Crossroads of America",
        villes: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Fishers", "Bloomington"]
    },
    {
        code: "iowa",
        name: "Iowa",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/2560px-Flag_of_Iowa.svg.png",
        capital: "Des Moines",
        population: 3155070,
        superficie: 145746,
        surnom: "The Hawkeye State",
        devise: "Our Liberties We Prize and Our Rights We Will Maintain",
        villes: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Waterloo", "Ames"]
    },
    {
        code: "kansas",
        name: "Kansas",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Kansas.svg",
        capital: "Topeka",
        population: 2913314,
        superficie: 213100,
        surnom: "The Sunflower State",
        devise: "Ad astra per aspera",
        villes: ["Wichita", "Overland Park", "Kansas City", "Topeka", "Olathe", "Lawrence", "Manhattan"]
    },
    {
        code: "kentucky",
        name: "Kentucky",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/2560px-Flag_of_Kentucky.svg.png",
        capital: "Frankfort",
        population: 4467673,
        superficie: 104656,
        surnom: "The Bluegrass State",
        devise: "United We Stand, Divided We Fall",
        villes: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Richmond", "Florence"]
    },
    {
        code: "louisiana",
        name: "Louisiana",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/2560px-Flag_of_Louisiana.svg.png",
        capital: "Baton Rouge",
        population: 4648794,
        superficie: 135659,
        surnom: "The Pelican State",
        devise: "Union, Justice, Confidence",
        villes: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Metairie", "Kenner"]
    },
    {
        code: "maine",
        name: "Maine",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Maine.svg",
        capital: "Augusta",
        population: 1344212,
        superficie: 91633,
        surnom: "The Pine Tree State",
        devise: "Dirigo",
        villes: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn", "Augusta", "Saco"]
    },
    {
        code: "maryland",
        name: "Maryland",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/2560px-Flag_of_Maryland.svg.png",
        capital: "Annapolis",
        population: 6045680,
        superficie: 32131,
        surnom: "The Old Line State",
        devise: "Fatti maschii, parole femine",
        villes: ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf", "Ellicott City", "Frederick"]
    },
    {
        code: "massachusetts",
        name: "Massachusetts",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Massachusetts.svg",
        capital: "Boston",
        population: 6892503,
        superficie: 27336,
        surnom: "The Bay State",
        devise: "Ense petit placidam sub libertate quietem",
        villes: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "New Bedford", "Quincy"]
    },
    {
        code: "michigan",
        name: "Michigan",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/2560px-Flag_of_Michigan.svg.png",
        capital: "Lansing",
        population: 9986857,
        superficie: 250487,
        surnom: "The Great Lakes State",
        devise: "Si quaeris peninsulam amoenam circumspice",
        villes: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint"]
    },
    {
        code: "minnesota",
        name: "Minnesota",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/2560px-Flag_of_Minnesota.svg.png",
        capital: "Saint Paul",
        population: 5639632,
        superficie: 225163,
        surnom: "The North Star State",
        devise: "L'Étoile du Nord",
        villes: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington", "Plymouth", "Brooklyn Park"]
    },
    {
        code: "mississippi",
        name: "Mississippi",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/2560px-Flag_of_Mississippi.svg.png",
        capital: "Jackson",
        population: 2976149,
        superficie: 125438,
        surnom: "The Magnolia State",
        devise: "Virtute et armis",
        villes: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi", "Meridian", "Tupelo"]
    },
    {
        code: "missouri",
        name: "Missouri",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/2560px-Flag_of_Missouri.svg.png",
        capital: "Jefferson City",
        population: 6137428,
        superficie: 180540,
        surnom: "The Show-Me State",
        devise: "Salus populi suprema lex esto",
        villes: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon"]
    },
    {
        code: "montana",
        name: "Montana",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/2560px-Flag_of_Montana.svg.png",
        capital: "Helena",
        population: 1068778,
        superficie: 380831,
        surnom: "Big Sky Country",
        devise: "Oro y plata",
        villes: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte-Silver Bow", "Helena", "Kalispell"]
    },
    {
        code: "nebraska",
        name: "Nebraska",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Nebraska.svg",
        capital: "Lincoln",
        population: 1934408,
        superficie: 200330,
        surnom: "The Cornhusker State",
        devise: "Equality before the law",
        villes: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings"]
    },
    {
        code: "nevada",
        name: "Nevada",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/2560px-Flag_of_Nevada.svg.png",
        capital: "Carson City",
        population: 3080156,
        superficie: 286380,
        surnom: "The Silver State",
        devise: "All for Our Country",
        villes: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks", "Carson City", "Elko"]
    },
    {
        code: "new-hampshire",
        name: "New Hampshire",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/2560px-Flag_of_New_Hampshire.svg.png",
        capital: "Concord",
        population: 1359711,
        superficie: 24214,
        surnom: "The Granite State",
        devise: "Live Free or Die",
        villes: ["Manchester", "Nashua", "Concord", "Dover", "Rochester", "Keene", "Portsmouth"]
    },
    {
        code: "new-jersey",
        name: "New Jersey",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/2560px-Flag_of_New_Jersey.svg.png",
        capital: "Trenton",
        population: 8882190,
        superficie: 22591,
        surnom: "The Garden State",
        devise: "Liberty and Prosperity",
        villes: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Woodbridge Township", "Lakewood Township"]
    },
    {
        code: "new-mexico",
        name: "New Mexico",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/2560px-Flag_of_New_Mexico.svg.png",
        capital: "Santa Fe",
        population: 2096829,
        superficie: 314917,
        surnom: "The Land of Enchantment",
        devise: "Crescit eundo",
        villes: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "Clovis"]
    },
    {
        code: "new-york",
        name: "New York",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/2560px-Flag_of_New_York.svg.png",
        capital: "Albany",
        population: 19453561,
        superficie: 141297,
        surnom: "The Empire State",
        devise: "Excelsior",
        villes: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle"]
    },
    {
        code: "north-carolina",
        name: "North Carolina",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg",
        capital: "Raleigh",
        population: 10488084,
        superficie: 139391,
        surnom: "The Tar Heel State",
        devise: "Esse quam videri",
        villes: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary"]
    },
    {
        code: "north-dakota",
        name: "North Dakota",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_North_Dakota.svg",
        capital: "Bismarck",
        population: 762062,
        superficie: 183108,
        surnom: "The Peace Garden State",
        devise: "Liberty and Union, Now and Forever, One and Inseparable",
        villes: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Williston", "Dickinson"]
    },
    {
        code: "ohio",
        name: "Ohio",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/2560px-Flag_of_Ohio.svg.png",
        capital: "Columbus",
        population: 11689100,
        superficie: 116098,
        surnom: "The Buckeye State",
        devise: "With God, All Things Are Possible",
        villes: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma"]
    },
    {
        code: "oklahoma",
        name: "Oklahoma",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Oklahoma.svg",
        capital: "Oklahoma City",
        population: 3956971,
        superficie: 181037,
        surnom: "The Sooner State",
        devise: "Labor omnia vincit",
        villes: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton", "Edmond", "Moore"]
    },
    {
        code: "oregon",
        name: "Oregon",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/2560px-Flag_of_Oregon.svg.png",
        capital: "Salem",
        population: 4217737,
        superficie: 254799,
        surnom: "The Beaver State",
        devise: "The Union",
        villes: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro", "Beaverton", "Medford"]
    },
    {
        code: "pennsylvania",
        name: "Pennsylvania",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/2560px-Flag_of_Pennsylvania.svg.png",
        capital: "Harrisburg",
        population: 12801989,
        superficie: 119283,
        surnom: "The Keystone State",
        devise: "Virtue, Liberty, and Independence",
        villes: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem"]
    },
    {
        code: "rhode-island",
        name: "Rhode Island",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg",
        capital: "Providence",
        population: 1059639,
        superficie: 4001,
        surnom: "The Ocean State",
        devise: "Hope",
        villes: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "North Providence"]
    },
    {
        code: "south-carolina",
        name: "South Carolina",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_South_Carolina.svg",
        capital: "Columbia",
        population: 5148714,
        superficie: 82933,
        surnom: "The Palmetto State",
        devise: "Dum spiro spero",
        villes: ["Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville"]
    },
    {
        code: "south-dakota",
        name: "South Dakota",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/2560px-Flag_of_South_Dakota.svg.png",
        capital: "Pierre",
        population: 884659,
        superficie: 199729,
        surnom: "Mount Rushmore State",
        devise: "Under God the People Rule",
        villes: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Yankton"]
    },
    {
        code: "tennessee",
        name: "Tennessee",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/2560px-Flag_of_Tennessee.svg.png",
        capital: "Nashville",
        population: 6833174,
        superficie: 109153,
        surnom: "The Volunteer State",
        devise: "Agriculture and Commerce",
        villes: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Jackson"]
    },
    {
        code: "texas",
        name: "Texas",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/2560px-Flag_of_Texas.svg.png",
        capital: "Austin",
        population: 28995881,
        superficie: 695662,
        surnom: "The Lone Star State",
        devise: "Friendship",
        villes: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington"]
    },
    {
        code: "utah",
        name: "Utah",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Utah.svg",
        capital: "Salt Lake City",
        population: 3205958,
        superficie: 219887,
        surnom: "The Beehive State",
        devise: "Industry",
        villes: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "Ogden"]
    },
    {
        code: "vermont",
        name: "Vermont",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Vermont.svg",
        capital: "Montpelier",
        population: 623989,
        superficie: 24906,
        surnom: "The Green Mountain State",
        devise: "Freedom and Unity",
        villes: ["Burlington", "Essex", "South Burlington", "Rutland", "Barre", "Montpelier", "Winooski"]
    },
    {
        code: "virginia",
        name: "Virginia",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/2560px-Flag_of_Virginia.svg.png",
        capital: "Richmond",
        population: 8535519,
        superficie: 110787,
        surnom: "The Old Dominion",
        devise: "Sic semper tyrannis",
        villes: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Hampton"]
    },
    {
        code: "washington",
        name: "Washington",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Washington%2C_D.C.svg",
        capital: "Olympia",
        population: 7614893,
        superficie: 184661,
        surnom: "The Evergreen State",
        devise: "Al-ki",
        villes: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett"]
    },
    {
        code: "west-virginia",
        name: "West Virginia",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_West_Virginia.svg",
        capital: "Charleston",
        population: 1793716,
        superficie: 62756,
        surnom: "The Mountain State",
        devise: "Montani semper liberi",
        villes: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont"]
    },
    {
        code: "wisconsin",
        name: "Wisconsin",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/2560px-Flag_of_Wisconsin.svg.png",
        capital: "Madison",
        population: 5822434,
        superficie: 169635,
        surnom: "The Badger State",
        devise: "Forward",
        villes: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha"]
    },
    {
        code: "wyoming",
        name: "Wyoming",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/2560px-Flag_of_Wyoming.svg.png",
        capital: "Cheyenne",
        population: 578759,
        superficie: 253335,
        surnom: "The Equality State",
        devise: "Equal Rights",
        villes: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Green River"]
    },
];

export default usStates;
