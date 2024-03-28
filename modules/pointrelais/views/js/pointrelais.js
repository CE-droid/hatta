document.addEventListener("DOMContentLoaded", function () {
    console.log("test");
    var data ={
        "Adrar": {
          "Adrar": [
            {
              "id": 10101,
              "nom_desk": "Agence de Adrar"
            }
          ],
          "Timimoun": [
            {
              "id": 10901,
              "nom_desk": "Agence de Timimoun"
            }
          ]
        },
        "Chlef": {
          "Chlef": [
            {
              "id": 21101,
              "nom_desk": "Agence de Chlef"
            }
          ],
          "Ténès": [
            {
              "id": 23401,
              "nom_desk": "Agence de Ténès"
            }
          ]
        },
        "Laghouat": {
          "Laghouat": [
            {
              "id": 30101,
              "nom_desk": "Agence de Laghouat"
            }
          ],
          "Aflou": [
            {
              "id": 31901,
              "nom_desk": "Agence de Aflou"
            }
          ]
        },
        "Oum El Bouaghi": {
          "Oum el Bouaghi": [
            {
              "id": 40101,
              "nom_desk": "Agence de Oum el Bouaghi"
            }
          ],
          "Aïn M'lila": [
            {
              "id": 40301,
              "nom_desk": "Agence de Aïn M'lila"
            }
          ]
        },
        "Batna": {
          "Batna": [
            {
              "id": 50101,
              "nom_desk": "Agence des 500 Logements"
            },
            {
              "id": 50103,
              "nom_desk": "Agence du CHU Route de Tazoult"
            }
          ],
          "Barika": [
            {
              "id": 54201,
              "nom_desk": "Agence de Barika"
            }
          ]
        },
        "Béjaïa": {
          "Béjaïa": [
            {
              "id": 60101,
              "nom_desk": "Agence de Béjaïa"
            }
          ],
          "Akbou": [
            {
              "id": 62501,
              "nom_desk": "Agence de Akbou"
            }
          ],
          "El Kseur": [
            {
              "id": 64001,
              "nom_desk": "Agence de El Kseur"
            }
          ]
        },
        "Biskra": {
          "Biskra": [
            {
              "id": 70401,
              "nom_desk": "Agence de Biskra"
            }
          ],
          "Ouled Djellal": [
            {
              "id": 72601,
              "nom_desk": "Agence de Ouled Djellal"
            }
          ],
          "Tolga": [
            {
              "id": 73201,
              "nom_desk": "Agence de Tolga"
            }
          ]
        },
        "Béchar": {
          "Béchar": [
            {
              "id": 80101,
              "nom_desk": "Agence de Béchar"
            }
          ]
        },
        "Blida": {
          "Blida": [
            {
              "id": 90101,
              "nom_desk": "Agence de Blida"
            },
            {
              "id": 90102,
              "nom_desk": "Agence de Bab Dzair"
            },
            {
              "id": 92401,
              "nom_desk": "Agence de Bouarfa"
            },
            {
              "id": 92001,
              "nom_desk": "Agence de Boufarik"
            }
          ]
        },
        "Bouira": {
          "Bouira": [
            {
              "id": 101601,
              "nom_desk": "Agence de Bouira"
            }
          ],
          "Lakhdaria": [
            {
              "id": 103101,
              "nom_desk": "Agence de Lakhdaria"
            }
          ],
          "Sour El Ghouzlane": [
            {
              "id": 104101,
              "nom_desk": "Agence de Sour El Ghouzlane"
            }
          ]
        },
        "Tamanrasset": {
          "Tamanrasset": [
            {
              "id": 110101,
              "nom_desk": "Agence de Tamanrasset"
            }
          ],
          "In Salah": [
            {
              "id": 110801,
              "nom_desk": "Agence de In Salah"
            }
          ]
        },
        "Tébessa": {
          "Tébessa": [
            {
              "id": 120101,
              "nom_desk": "Agence de Tébessa"
            },
            {
              "id": 120102,
              "nom_desk": "Agence de Skanska"
            }
          ]
        },
        "Tlemcen": {
          "Tlemcen": [
            {
              "id": 130101,
              "nom_desk": "Agence de Tlemcen"
            }
          ],
          "Hennaya": [
            {
              "id": 132601,
              "nom_desk": "Agence de Hennaya"
            }
          ],
          "Maghnia": [
            {
              "id": 132701,
              "nom_desk": "Agence de Maghnia"
            }
          ],
          "Mansourah": [
            {
              "id": 135101,
              "nom_desk": "Agence de Mansourah"
            }
          ],
          "Chetouane": [
            {
              "id": 135001,
              "nom_desk": "Agence Chetouane"
            }
          ]
        },
        "Tiaret": {
          "Frenda": [
            {
              "id": 141201,
              "nom_desk": "Agence de Frenda"
            }
          ],
          "Tiaret": [
            {
              "id": 143901,
              "nom_desk": "Agence de Tiaret"
            }
          ]
        },
        "Tizi Ouzou": {
          "Tizi Ouzou": [
            {
              "id": 150101,
              "nom_desk": "Agence de Bekkar"
            },
            {
              "id": 150102,
              "nom_desk": "Agence de nouvelle ville"
            }
          ],
          "Tizi Gheniff": [
            {
              "id": 151101,
              "nom_desk": "Agence de Tizi Gheniff"
            }
          ],
          "Draâ Ben Khedda": [
            {
              "id": 154701,
              "nom_desk": "Agence de Draâ Ben Khedda"
            }
          ],
          "Azazga": [
            {
              "id": 151801,
              "nom_desk": "Agence de Azazga"
            }
          ]
        },
        "Alger": {
          "Alger Centre": [
            {
              "id": 160101,
              "nom_desk": "Agence de Alger Centre"
            }
          ],
          "Birkhadem": [
            {
              "id": 161201,
              "nom_desk": "Agence de Birkhadem"
            }
          ],
          "Birtouta": [
            {
              "id": 163401,
              "nom_desk": "Agence de Birtouta"
            }
          ],
          "Bordj El Bahri": [
            {
              "id": 163901,
              "nom_desk": "Agence de Bordj El Bahri"
            }
          ],
          "Bordj El Kiffan": [
            {
              "id": 163001,
              "nom_desk": "Agence de Bordj El Kiffan"
            }
          ],
          "Reghaïa": [
            {
              "id": 164301,
              "nom_desk": "Agence de DNC"
            },
            {
              "id": 164302,
              "nom_desk": "Agence de Signa"
            }
          ],
          "Aïn Benian": [
            {
              "id": 164401,
              "nom_desk": "Agence de Aïn Benian"
            }
          ],
          "Zeralda": [
            {
              "id": 164601,
              "nom_desk": "Agence de Zeralda"
            }
          ],
          "Cheraga": [
            {
              "id": 165001,
              "nom_desk": "Agence de Cheraga"
            }
          ],
          "Draria": [
            {
              "id": 165301,
              "nom_desk": "Agence de Draria"
            },
            {
              "id": 165302,
              "nom_desk": "Agence de Oued Tarfa"
            }
          ],
          "Hussein Dey": [
            {
              "id": 161701,
              "nom_desk": "Agence de Hussein Dey"
            }
          ]
        },
        "Djelfa": {
          "Aïn Oussara": [
            {
              "id": 170501,
              "nom_desk": "Agence de Aïn Oussara"
            }
          ],
          "Djelfa": [
            {
              "id": 171401,
              "nom_desk": "Agence de Djelfa"
            }
          ]
        },
        "Jijel": {
          "Jijel": [
            {
              "id": 180101,
              "nom_desk": "Agence de Jijel"
            }
          ],
          "Taher": [
            {
              "id": 180501,
              "nom_desk": "Agence de Taher"
            }
          ]
        },
        "Sétif": {
          "Aïn Oulmene": [
            {
              "id": 190701,
              "nom_desk": "Agence de Aïn Oulmene"
            }
          ],
          "Bougaa": [
            {
              "id": 192601,
              "nom_desk": "Agence de Bougaa"
            }
          ],
          "El Eulma": [
            {
              "id": 193201,
              "nom_desk": "Agence de El Eulma"
            }
          ],
          "Maabouda": [
            {
              "id": 195501,
              "nom_desk": "Maabouda"
            }
          ],
          "El Hidhab": [
            {
              "id": 195502,
              "nom_desk": "El Hidhab"
            }
          ]
        },
        "Saïda": {
          "Saïda": [
            {
              "id": 201101,
              "nom_desk": "Agence de Saïda"
            }
          ]
        },
        "Skikda": {
          "Azzaba": [
            {
              "id": 210501,
              "nom_desk": "Agence de Azzaba"
            }
          ],
          "Collo": [
            {
              "id": 211401,
              "nom_desk": "Agence de Collo"
            }
          ],
          "El Harrouch": [
            {
              "id": 211801,
              "nom_desk": "Agence de El Harrouch"
            }
          ],
          "Skikda": [
            {
              "id": 213502,
              "nom_desk": "Agence de Skikda"
            }
          ]
        },
        "Sidi Bel Abbès": {
          "Sidi Bel Abbes": [
            {
              "id": 223601,
              "nom_desk": "Agence de Sidi Bel Abbes"
            }
          ],
          "Benhamouda": [
            {
              "id": 223602,
              "nom_desk": "Agence Benhamouda"
            }
          ]
        },
        "Annaba": {
          "Gassiot": [
            {
              "id": 230101,
              "nom_desk": "Agence de Gassiot"
            }
          ],
          "Sidi Brahim": [
            {
              "id": 230102,
              "nom_desk": "Agence de Sidi Brahim"
            }
          ],
          "El Bouni": [
            {
              "id": 230501,
              "nom_desk": "Agence de El Bouni"
            }
          ]
        },
        "Guelma": {
          "Guelma": [
            {
              "id": 241901,
              "nom_desk": "Agence de Guelma"
            }
          ],
          "Oued Zenati": [
            {
              "id": 243001,
              "nom_desk": "Agence de Oued Zenati"
            }
          ]
        },
        "Constantine": {
          "Belle vue": [
            {
              "id": 250401,
              "nom_desk": "Agence Belle vue"
            }
          ],
          "Sidi Mabrouk": [
            {
              "id": 250402,
              "nom_desk": "Agence Sidi Mabrouk"
            }
          ],
          "Didouche Mourad": [
            {
              "id": 250501,
              "nom_desk": "Agence de Didouche Mourad"
            }
          ],
          "El Khroub": [
            {
              "id": 250601,
              "nom_desk": "Agence de El Khroub"
            },
            {
              "id": 250602,
              "nom_desk": "Agence Ali Mendjeli"
            }
          ]
        },
        "Médéa": {
          "El Koutab": [
            {
              "id": 263301,
              "nom_desk": "Agence de Médéa [El Koutab]"
            }
          ],
          "Pole Urbain": [
            {
              "id": 263302,
              "nom_desk": "Agence de Médéa [Pole Urbain]"
            }
          ]
        },
        "Mostaganem": {
          "Mostaganem": [
            {
              "id": 271801,
              "nom_desk": "Salamandre"
            },
            {
              "id": 271802,
              "nom_desk": "Kharouba"
            }
          ]
        },
        "M'Sila": {
          "Berhoum": [
            {
              "id": 281001,
              "nom_desk": "Agence de Berhoum"
            }
          ],
          "Bou Saâda": [
            {
              "id": 281201,
              "nom_desk": "Agence de Bou Saâda"
            }
          ],
          "Salem Shopping Mall": [
            {
              "id": 282802,
              "nom_desk": "Agence de  Salem Shopping Mall"
            }
          ]
        },
        "Mascara": {
          "Mascara": [
            {
              "id": 292801,
              "nom_desk": "Agence de Mascara"
            }
          ]
        },
        "Ouargla": {
          "Hassi Messaoud": [
            {
              "id": 300801,
              "nom_desk": "Agence de Hassi Messaoud"
            }
          ],
          "Ouargla": [
            {
              "id": 301301,
              "nom_desk": "Agence de Ouargla"
            }
          ],
          "Touggourt": [
            {
              "id": 302001,
              "nom_desk": "Agence de Touggourt"
            }
          ]
        },
        "Oran": {
          "Saint Hubert": [
            {
              "id": 310101,
              "nom_desk": "Agence Saint Hubert"
            }
          ],
          "Cité Djamel": [
            {
              "id": 310102,
              "nom_desk": "Cité Djamel"
            }
          ],
          "Fernand Ville": [
            {
              "id": 310302,
              "nom_desk": "Agence Fernand Ville"
            }
          ],
          "Arzew": [
            {
              "id": 310601,
              "nom_desk": "Agence de Arzew"
            }
          ]
        },
        "El Bayadh": {
          "El Bayadh": [
            {
              "id": 320101,
              "nom_desk": "Agence de El Bayadh"
            }
          ]
        },
        "Illizi": {
          "Illizi": [
            {
              "id": 330101,
              "nom_desk": "Agence de Illizi"
            }
          ],
          "Djanet": [
            {
              "id": 330102,
              "nom_desk": "Agence de Djanet"
            }
          ]
        },
        "Bordj Bou Arreridj": {
          "Cité Soualem": [
            {
              "id": 340602,
              "nom_desk": "Agence de Cité Soualem"
            }
          ],
          "El Djebasse": [
            {
              "id": 340601,
              "nom_desk": "Agence de El Djebasse"
            }
          ]
        },
        "Boumerdès": {
          "Boumerdes": [
            {
              "id": 350101,
              "nom_desk": "Agence de Boumerdes"
            }
          ],
          "Bordj Menaiel": [
            {
              "id": 350501,
              "nom_desk": "Agence de Bordj Menaiel"
            }
          ]
        },
        "El Tarf": {
          "Ben Mehidi": [
            {
              "id": 360401,
              "nom_desk": "Agence de Ben Mehidi"
            }
          ],
          "El Tarf": [
            {
              "id": 361701,
              "nom_desk": "Agence de El Tarf"
            }
          ]
        },
        "Tindouf": {
          "Tindouf": [
            {
              "id": 370201,
              "nom_desk": "Agence de Tindouf"
            }
          ]
        },
        "Tissemsilt": {
          "Tissemsilt": [
            {
              "id": 382101,
              "nom_desk": "Agence de Tissemsilt"
            }
          ]
        },
        "El Oued": {
          "El Oued": [
            {
              "id": 390101,
              "nom_desk": "Agence de El Oued"
            }
          ],
          "El M'Ghair": [
            {
              "id": 392701,
              "nom_desk": "Agence de El M'Ghair"
            }
          ],
          "Djamaa": [
            {
              "id": 392801,
              "nom_desk": "Agence de Djamaa"
            }
          ]
        },
        "Khenchela": {
          "Khenchela": [
            {
              "id": 401301,
              "nom_desk": "Agence de Khenchela"
            }
          ]
        },
        "Souk Ahras": {
          "Souk Ahras": [
            {
              "id": 410101,
              "nom_desk": "Agence de Souk Ahras"
            }
          ]
        },
        "Tipaza": {
          "Tipaza": [
            {
              "id": 420101,
              "nom_desk": "Agence de Tipaza"
            },
            {
              "id": 420102,
              "nom_desk": "Agence Rue du stade"
            }
          ]
        },
        "Mila": {
          "Chelghoum Laid": [
            {
              "id": 430801,
              "nom_desk": "Agence de Chelghoum Laid"
            }
          ],
          "Mila": [
            {
              "id": 431601,
              "nom_desk": "Agence de Mila"
            }
          ]
        },
        "Aïn Defla": {
          "Aïn Defla": [
            {
              "id": 440101,
              "nom_desk": "Agence de Aïn Defla"
            }
          ],
          "Khemis Miliana": [
            {
              "id": 442601,
              "nom_desk": "Agence de Khemis Miliana"
            }
          ]
        },
        "Naâma": {
          "Naâma": [
            {
              "id": 450101,
              "nom_desk": "Agence de Naâma"
            }
          ],
          "Mecheria": [
            {
              "id": 450201,
              "nom_desk": "Agence de Mecheria"
            }
          ]
        },
        "Aïn Témouchent": {
          "Aïn Témouchent": [
            {
              "id": 460401,
              "nom_desk": "Agence de Aïn Témouchent"
            }
          ],
          "Hammam Bouhadjar": [
            {
              "id": 461501,
              "nom_desk": "Agence de Hammam Bouhadjar"
            }
          ]
        },
        "Ghardaïa": {
          "El Guerrara": [
            {
              "id": 470501,
              "nom_desk": "Agence de El Guerrara"
            }
          ],
          "El Menia": [
            {
              "id": 470601,
              "nom_desk": "Agence de El Menia"
            }
          ],
          "Ghardaïa": [
            {
              "id": 470701,
              "nom_desk": "Agence de Ghardaïa"
            }
          ],
          "Bouhraoua": [
            {
              "id": 470702,
              "nom_desk": "Agence de Bouhraoua"
            }
          ],
          "Metlili": [
            {
              "id": 471101,
              "nom_desk": "Agence de Metlili"
            }
          ]
        },
        "Relizane": {
          "Relizane": [
            {
              "id": 483001,
              "nom_desk": "Agence de Relizane"
            }
          ]
        }
      }
      

      console.log("data", data);

      // Get the select elements for wilaya, commune, and desk
      var wilayaSelect = document.getElementById('wilaya-dropdown');
      var communeSelect = document.getElementById('commune-dropdown');
      var deskSelect = document.getElementById('desk-dropdown');
      
      // Function to populate options for a select element
      function populateOptions(selectElement, dataObject) {
          // Clear previous options
          selectElement.innerHTML = '';
      
          // Add default option
          var defaultOption = document.createElement('option');
          defaultOption.text = 'Select';
          defaultOption.value = '';
          selectElement.add(defaultOption);
      
          // Add options based on the keys of the data object
          for (var key in dataObject) {
              var option = document.createElement('option');
              option.text = key;
              option.value = key;
              selectElement.add(option);
          }
      }
      
      // Populate options for wilaya select
      populateOptions(wilayaSelect, data);
      
      // Event listener for wilaya select
      wilayaSelect.addEventListener('change', function () {
          // Get the selected wilaya
          var selectedWilaya = this.value;
      
          // Populate options for commune select based on the selected wilaya
          populateOptions(communeSelect, data[selectedWilaya]);
      });
      
      // Event listener for commune select
      communeSelect.addEventListener('change', function () {
          // Get the selected wilaya and commune
          var selectedWilaya = wilayaSelect.value;
          var selectedCommune = this.value;
      
          // Populate options for desk select based on the selected wilaya and commune
          populateOptions(deskSelect, data[selectedWilaya][selectedCommune]);
      });
    });