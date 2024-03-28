var data = JSON.parse(`[{"A":10101,"nom_desk":"Agence de Adrar","commune":"Adrar","wilaya":"Adrar"},{"A":10901,"nom_desk":"Agence de Timimoun","commune":"Timimoun","wilaya":"Adrar"},{"A":21101,"nom_desk":"Agence de Chlef","commune":"Chlef","wilaya":"Chlef"},{"A":23401,"nom_desk":"Agence de Ténès","commune":"Ténès","wilaya":"Chlef"},{"A":30101,"nom_desk":"Agence de Laghouat","commune":"Laghouat","wilaya":"Laghouat"},{"A":31901,"nom_desk":"Agence de Aflou","commune":"Aflou","wilaya":"Laghouat"},{"A":40101,"nom_desk":"Agence de Oum el Bouaghi","commune":"Oum el Bouaghi","wilaya":"Oum El Bouaghi"},{"A":40301,"nom_desk":"Agence de Aïn M'lila","commune":"Aïn M'lila","wilaya":"Oum El Bouaghi"},{"A":50101,"nom_desk":"Agence des 500 Logements","commune":"Batna","wilaya":"Batna"},{"A":50103,"nom_desk":"Agence du CHU Route de Tazoult","commune":"Batna","wilaya":"Batna"},{"A":54201,"nom_desk":"Agence de Barika","commune":"Barika","wilaya":"Batna"},{"A":60101,"nom_desk":"Agence de Béjaïa","commune":"Béjaïa","wilaya":"Béjaïa"},{"A":62501,"nom_desk":"Agence de Akbou","commune":"Akbou","wilaya":"Béjaïa"},{"A":64001,"nom_desk":"Agence de El Kseur","commune":"El Kseur","wilaya":"Béjaïa"},{"A":70401,"nom_desk":"Agence de Biskra","commune":"Biskra","wilaya":"Biskra"},{"A":72601,"nom_desk":"Agence de Ouled Djellal","commune":"Ouled Djellal","wilaya":"Biskra"},{"A":73201,"nom_desk":"Agence de Tolga","commune":"Tolga","wilaya":"Biskra"},{"A":80101,"nom_desk":"Agence de Béchar","commune":"Béchar","wilaya":"Béchar"},{"A":90101,"nom_desk":"Agence de Blida","commune":"Blida","wilaya":"Blida"},{"A":90102,"nom_desk":"Agence de Bab Dzair","commune":"Blida","wilaya":"Blida"},{"A":92401,"nom_desk":"Agence de Bouarfa        ","commune":"Bouarfa        ","wilaya":"Blida"},{"A":92001,"nom_desk":"Agence de Boufarik","commune":"Boufarik","wilaya":"Blida"},{"A":101601,"nom_desk":"Agence de Bouira","commune":"Bouira","wilaya":"Bouira"},{"A":103101,"nom_desk":"Agence de Lakhdaria","commune":"Lakhdaria","wilaya":"Bouira"},{"A":104101,"nom_desk":"Agence de Sour El Ghouzlane","commune":"Sour El Ghouzlane","wilaya":"Bouira"},{"A":110101,"nom_desk":"Agence de Tamanrasset","commune":"Tamanrasset","wilaya":"Tamanrasset"},{"A":110801,"nom_desk":"Agence de In Salah","commune":"In Salah","wilaya":"Tamanrasset"},{"A":120101,"nom_desk":"Agence de Tébessa","commune":"Tébessa","wilaya":"Tébessa"},{"A":120102,"nom_desk":"Agence de Skanska","commune":"Tébessa","wilaya":"Tébessa"},{"A":130101,"nom_desk":"Agence de Tlemcen","commune":"Tlemcen","wilaya":"Tlemcen"},{"A":132601,"nom_desk":"Agence de Hennaya","commune":"Hennaya","wilaya":"Tlemcen"},{"A":132701,"nom_desk":"Agence de Maghnia","commune":"Maghnia","wilaya":"Tlemcen"},{"A":135101,"nom_desk":"Agence de Mansourah","commune":"Mansourah","wilaya":"Tlemcen"},{"A":135001,"nom_desk":"Agence Chetouane","commune":"Chetouane","wilaya":"Tlemcen"},{"A":141201,"nom_desk":"Agence de Frenda","commune":"Frenda","wilaya":"Tiaret"},{"A":143901,"nom_desk":"Agence de Tiaret","commune":"Tiaret","wilaya":"Tiaret"},{"A":150101,"nom_desk":"Agence de Bekkar","commune":"Tizi Ouzou","wilaya":"Tizi Ouzou"},{"A":150102,"nom_desk":"Agence de nouvelle ville","commune":"Tizi Ouzou","wilaya":"Tizi Ouzou"},{"A":151101,"nom_desk":"Agence de Tizi Gheniff","commune":"Tizi Gheniff","wilaya":"Tizi Ouzou"},{"A":154701,"nom_desk":"Agence de Draâ Ben Khedda","commune":"Draâ Ben Khedda","wilaya":"Tizi Ouzou"},{"A":151801,"nom_desk":"Agence de Azazga","commune":"Azazga","wilaya":"Tizi Ouzou"},{"A":160101,"nom_desk":"Agence de Alger Centre","commune":"Alger Centre","wilaya":"Alger"},{"A":161201,"nom_desk":"Agence de Birkhadem","commune":"Birkhadem","wilaya":"Alger"},{"A":163401,"nom_desk":"Agence de Birtouta","commune":"Birtouta","wilaya":"Alger"},{"A":163901,"nom_desk":"Agence de Bordj El Bahri","commune":"Bordj El Bahri","wilaya":"Alger"},{"A":163001,"nom_desk":"Agence de Bordj El Kiffan","commune":"Bordj El Kiffan","wilaya":"Alger"},{"A":164301,"nom_desk":"Agence de DNC","commune":"Reghaïa","wilaya":"Alger"},{"A":164302,"nom_desk":"Agence de Signa","commune":"Reghaïa","wilaya":"Alger"},{"A":164401,"nom_desk":"Agence de Aïn Benian","commune":"Aïn Benian","wilaya":"Alger"},{"A":164601,"nom_desk":"Agence de Zeralda","commune":"Zeralda","wilaya":"Alger"},{"A":165001,"nom_desk":"Agence de Cheraga","commune":"Cheraga","wilaya":"Alger"},{"A":165301,"nom_desk":"Agence de Draria","commune":"Draria","wilaya":"Alger"},{"A":165302,"nom_desk":"Agence de Oued Tarfa","commune":"Draria","wilaya":"Alger"},{"A":161701,"nom_desk":"Agence de Hussein Dey","commune":"Hussein Dey","wilaya":"Alger"},{"A":170501,"nom_desk":"Agence de Aïn Oussara","commune":"Aïn Oussara","wilaya":"Djelfa"},{"A":171401,"nom_desk":"Agence de Djelfa","commune":"Djelfa","wilaya":"Djelfa"},{"A":180101,"nom_desk":"Agence de Jijel","commune":"Jijel","wilaya":"Jijel"},{"A":180501,"nom_desk":"Agence de Taher","commune":"Taher","wilaya":"Jijel"},{"A":190701,"nom_desk":"Agence de Aïn Oulmene","commune":"Aïn Oulmene","wilaya":"Sétif"},{"A":192601,"nom_desk":"Agence de Bougaa","commune":"Bougaa","wilaya":"Sétif"},{"A":193201,"nom_desk":"Agence de El Eulma","commune":"El Eulma","wilaya":"Sétif"},{"A":195501,"nom_desk":"Maabouda","commune":"Sétif","wilaya":"Sétif"},{"A":195502,"nom_desk":"El Hidhab","commune":"Sétif","wilaya":"Sétif"},{"A":201101,"nom_desk":"Agence de Saïda","commune":"Saïda","wilaya":"Saïda"},{"A":210501,"nom_desk":"Agence de Azzaba","commune":"Azzaba","wilaya":"Skikda"},{"A":211401,"nom_desk":"Agence de Collo","commune":"Collo","wilaya":"Skikda"},{"A":211801,"nom_desk":"Agence de El Harrouch","commune":"El Harrouch","wilaya":"Skikda"},{"A":213502,"nom_desk":"Agence de Skikda","commune":"Skikda","wilaya":"Skikda"},{"A":223601,"nom_desk":"Agence de Sidi Bel Abbes","commune":"Sidi Bel Abbes","wilaya":"Sidi Bel Abbès"},{"A":223602,"nom_desk":"Agence Benhamouda","commune":"Sidi Bel Abbes","wilaya":"Sidi Bel Abbès"},{"A":230101,"nom_desk":"Agence de Gassiot","commune":"Annaba","wilaya":"Annaba"},{"A":230102,"nom_desk":"Agence de Sidi Brahim","commune":"Annaba","wilaya":"Annaba"},{"A":230501,"nom_desk":"Agence de El Bouni","commune":"El Bouni","wilaya":"Annaba"},{"A":241901,"nom_desk":"Agence de Guelma","commune":"Guelma","wilaya":"Guelma"},{"A":243001,"nom_desk":"Agence de Oued Zenati","commune":"Oued Zenati","wilaya":"Guelma"},{"A":250401,"nom_desk":"Agence Belle vue","commune":"Constantine","wilaya":"Constantine"},{"A":250402,"nom_desk":"Agence Sidi Mabrouk","commune":"Constantine","wilaya":"Constantine"},{"A":250501,"nom_desk":"Agence de Didouche Mourad","commune":"Didouche Mourad","wilaya":"Constantine"},{"A":250601,"nom_desk":"Agence de El Khroub","commune":"El Khroub","wilaya":"Constantine"},{"A":250602,"nom_desk":"Agence Ali Mendjeli","commune":"El Khroub","wilaya":"Constantine"},{"A":263301,"nom_desk":"Agence de Médéa [El Koutab]","commune":"Médéa","wilaya":"Médéa"},{"A":263302,"nom_desk":"Agence de Médéa [Pole Urbain]","commune":"Médéa","wilaya":"Médéa"},{"A":271801,"nom_desk":"Salamandre","commune":"Mostaganem","wilaya":"Mostaganem"},{"A":271802,"nom_desk":"Kharouba","commune":"Mostaganem","wilaya":"Mostaganem"},{"A":281001,"nom_desk":"Agence de Berhoum","commune":"Berhoum","wilaya":"M'Sila"},{"A":281201,"nom_desk":"Agence de Bou Saâda","commune":"Bou Saâda","wilaya":"M'Sila"},{"A":282802,"nom_desk":"Agence de  Salem Shopping Mall","commune":"M'Sila","wilaya":"M'Sila"},{"A":292801,"nom_desk":"Agence de Mascara","commune":"Mascara","wilaya":"Mascara"},{"A":300801,"nom_desk":"Agence de Hassi Messaoud","commune":"Hassi Messaoud","wilaya":"Ouargla"},{"A":301301,"nom_desk":"Agence de Ouargla","commune":"Ouargla","wilaya":"Ouargla"},{"A":302001,"nom_desk":"Agence de Touggourt","commune":"Touggourt","wilaya":"Ouargla"},{"A":310101,"nom_desk":"Agence Saint Hubert","commune":"Oran","wilaya":"Oran"},{"A":310102,"nom_desk":"Cité Djamel","commune":"Oran","wilaya":"Oran"},{"A":310302,"nom_desk":"Agence Fernand Ville","commune":"Bir El Djir","wilaya":"Oran"},{"A":310601,"nom_desk":"Agence de Arzew","commune":"Arzew","wilaya":"Oran"},{"A":320101,"nom_desk":"Agence de El Bayadh","commune":"El Bayadh","wilaya":"El Bayadh"},{"A":330101,"nom_desk":"Agence de Illizi","commune":"Illizi","wilaya":"Illizi"},{"A":330102,"nom_desk":"Agence de Djanet","commune":"Djanet","wilaya":"Illizi"},{"A":340602,"nom_desk":"Agence de Cité Soualem","commune":"Bordj Bou Arreridj","wilaya":"Bordj Bou Arreridj"},{"A":340601,"nom_desk":"Agence de El Djebasse","commune":"Bordj Bou Arreridj","wilaya":"Bordj Bou Arreridj"},{"A":350101,"nom_desk":"Agence de Boumerdes","commune":"Boumerdes","wilaya":"Boumerdès"},{"A":350501,"nom_desk":"Agence de Bordj Menaiel","commune":"Bordj Menaiel","wilaya":"Boumerdès"},{"A":360401,"nom_desk":"Agence de Ben Mehidi","commune":"Ben Mehidi","wilaya":"El Tarf"},{"A":361701,"nom_desk":"Agence de El Tarf","commune":"El Tarf","wilaya":"El Tarf"},{"A":370201,"nom_desk":"Agence de Tindouf","commune":"Tindouf","wilaya":"Tindouf"},{"A":382101,"nom_desk":"Agence de Tissemsilt","commune":"Tissemsilt","wilaya":"Tissemsilt"},{"A":390101,"nom_desk":"Agence de El Oued","commune":"El Oued","wilaya":"El Oued"},{"A":392701,"nom_desk":"Agence de El M'Ghair","commune":"El M'Ghair","wilaya":"El Oued"},{"A":392801,"nom_desk":"Agence de Djamaa","commune":"Djamaa","wilaya":"El Oued"},{"A":401301,"nom_desk":"Agence de Khenchela","commune":"Khenchela","wilaya":"Khenchela"},{"A":410101,"nom_desk":"Agence de Souk Ahras","commune":"Souk Ahras","wilaya":"Souk Ahras"},{"A":420101,"nom_desk":"Agence de Tipaza","commune":"Tipaza","wilaya":"Tipaza"},{"A":420102,"nom_desk":"Agence Rue du stade","commune":"Tipaza","wilaya":"Tipaza"},{"A":430801,"nom_desk":"Agence de Chelghoum Laid","commune":"Chelghoum Laid","wilaya":"Mila"},{"A":431601,"nom_desk":"Agence de Mila","commune":"Mila","wilaya":"Mila"},{"A":440101,"nom_desk":"Agence de Aïn Defla","commune":"Aïn Defla","wilaya":"Aïn Defla"},{"A":442601,"nom_desk":"Agence de Khemis Miliana","commune":"Khemis Miliana","wilaya":"Aïn Defla"},{"A":450101,"nom_desk":"Agence de Naâma","commune":"Naâma","wilaya":"Naâma"},{"A":450201,"nom_desk":"Agence de Mecheria","commune":"Mecheria","wilaya":"Naâma"},{"A":460401,"nom_desk":"Agence de Aïn Témouchent","commune":"Aïn Témouchent","wilaya":"Aïn Témouchent"},{"A":461501,"nom_desk":"Agence de Hammam Bouhadjar","commune":"Hammam Bouhadjar","wilaya":"Aïn Témouchent"},{"A":470501,"nom_desk":"Agence de El Guerrara","commune":"El Guerrara","wilaya":"Ghardaïa"},{"A":470601,"nom_desk":"Agence de El Menia","commune":"El Menia","wilaya":"Ghardaïa"},{"A":470701,"nom_desk":"Agence de Ghardaïa","commune":"Ghardaïa","wilaya":"Ghardaïa"},{"A":470702,"nom_desk":"Agence de Bouhraoua","commune":"Bouhraoua","wilaya":"Ghardaïa"},{"A":471101,"nom_desk":"Agence de Metlili","commune":"Metlili","wilaya":"Ghardaïa"},{"A":483001,"nom_desk":"Agence de Relizane","commune":"Relizane","wilaya":"Relizane"}]`);

// Get the select elements for wilaya, commune, and desk
var wilayaSelect = document.getElementById('wilaya');
var communeSelect = document.getElementById('commune');
var deskSelect = document.getElementById('desk');

// Function to populate options for a select element
function populateOptions(selectElement, dataArray, key) {
    // Clear previous options
    selectElement.innerHTML = '';

    // Add default option
    var defaultOption = document.createElement('option');
    defaultOption.text = 'Select ' + key;
    defaultOption.value = '';
    selectElement.add(defaultOption);

    // Get unique values for the given key
    var uniqueValues = [...new Set(dataArray.map(item => item[key]))];

    // Add options for each unique value
    uniqueValues.forEach(value => {
        var option = document.createElement('option');
        option.text = value;
        option.value = value;
        selectElement.add(option);
    });
}

// Populate options for wilaya select
populateOptions(wilayaSelect, data, 'wilaya');

// Event listener for wilaya select
wilayaSelect.addEventListener('change', function() {
    // Filter data based on selected wilaya
    var filteredData = data.filter(item => item.wilaya === this.value);

    // Populate options for commune select based on filtered data
    populateOptions(communeSelect, filteredData, 'commune');
});

// Event listener for commune select
communeSelect.addEventListener('change', function() {
    // Filter data based on selected wilaya and commune
    var filteredData = data.filter(item => item.wilaya === wilayaSelect.value && item.commune === this.value);

    // Populate options for desk select based on filtered data
    populateOptions(deskSelect, filteredData, 'nom_desk');
});